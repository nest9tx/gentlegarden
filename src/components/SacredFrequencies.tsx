'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

type FrequencyType = '432hz' | '528hz' | '741hz' | 'nature' | 'off';

interface SacredFrequenciesProps {
  defaultEnabled?: boolean;
  className?: string;
}

export default function SacredFrequencies({ 
  defaultEnabled = false, 
  className = '' 
}: SacredFrequenciesProps) {
  const [isEnabled, setIsEnabled] = useState(defaultEnabled);
  const [currentFrequency, setCurrentFrequency] = useState<FrequencyType>('432hz');
  const [volume, setVolume] = useState(0.1); // Very gentle volume
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Initialize Web Audio API
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioContextRef.current = new AudioContextClass();
    }
    
    return () => {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Create sacred tone
  const createSacredTone = useCallback((frequency: number) => {
    if (!audioContextRef.current) return;

    // Stop existing oscillator
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
    }

    const audioContext = audioContextRef.current;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // Set up the sacred frequency
    oscillator.type = 'sine'; // Pure, gentle sine wave
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    // Set up gentle volume with fade-in
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 3); // 3-second fade-in

    // Connect the nodes
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Start the tone
    oscillator.start();

    oscillatorRef.current = oscillator;
    gainNodeRef.current = gainNode;
  }, [volume]);

  // Stop the tone with fade-out
  const stopTone = () => {
    if (oscillatorRef.current && gainNodeRef.current && audioContextRef.current) {
      const audioContext = audioContextRef.current;
      gainNodeRef.current.gain.linearRampToValueAtTime(0, audioContext.currentTime + 2); // 2-second fade-out
      
      setTimeout(() => {
        if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current = null;
        }
      }, 2000);
    }
  };

  // Handle frequency changes
  useEffect(() => {
    if (isEnabled && currentFrequency !== 'off') {
      let frequency: number;
      
      switch (currentFrequency) {
        case '432hz':
          frequency = 432; // Nature's frequency
          break;
        case '528hz':
          frequency = 528; // Love frequency
          break;
        case '741hz':
          frequency = 741; // Awakening frequency
          break;
        default:
          return;
      }

      // Resume audio context if suspended (browser autoplay policy)
      if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume();
      }

      createSacredTone(frequency);
    } else {
      stopTone();
    }

    return () => {
      if (!isEnabled) {
        stopTone();
      }
    };
  }, [isEnabled, currentFrequency, volume]);

  // Handle volume changes
  useEffect(() => {
    if (gainNodeRef.current && audioContextRef.current) {
      gainNodeRef.current.gain.linearRampToValueAtTime(
        volume, 
        audioContextRef.current.currentTime + 0.5
      );
    }
  }, [volume]);

  const toggleFrequencies = async () => {
    if (!isEnabled) {
      // First interaction - resume audio context
      if (audioContextRef.current?.state === 'suspended') {
        await audioContextRef.current.resume();
      }
    }
    setIsEnabled(!isEnabled);
  };

  return (
    <div className={`fixed bottom-6 left-6 z-50 ${className}`}>
      <div className="bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-4 transition-all duration-300">
        
        {/* Toggle Button */}
        <button
          onClick={toggleFrequencies}
          className={`flex items-center space-x-2 mb-3 px-4 py-2 rounded-xl transition-all duration-300 ${
            isEnabled 
              ? 'bg-purple-500/30 text-purple-100' 
              : 'bg-white/10 text-purple-300 hover:bg-white/20'
          }`}
        >
          <div className={`text-lg ${isEnabled ? 'animate-pulse' : ''}`}>
            🎵
          </div>
          <span className="text-sm font-medium">
            {isEnabled ? 'Sacred Frequencies Active' : 'Sacred Frequencies'}
          </span>
        </button>

        {/* Controls (shown when enabled) */}
        {isEnabled && (
          <div className="space-y-3 animate-fadeIn">
            
            {/* Frequency Selection */}
            <div>
              <label className="block text-xs text-purple-300 mb-2">
                Sacred Tone
              </label>
              <select
                value={currentFrequency}
                onChange={(e) => setCurrentFrequency(e.target.value as FrequencyType)}
                className="w-full bg-white/10 border border-purple-300/30 rounded-lg px-3 py-2 text-sm text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="432hz">432Hz - Nature&apos;s Harmony</option>
                <option value="528hz">528Hz - Love Frequency</option>
                <option value="741hz">741Hz - Awakening</option>
              </select>
            </div>

            {/* Volume Control */}
            <div>
              <label className="block text-xs text-purple-300 mb-2">
                Gentle Volume
              </label>
              <input
                type="range"
                min="0.01"
                max="0.3"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Sacred Description */}
            <div className="text-xs text-purple-300/80 italic">
              {currentFrequency === '432hz' && "Resonates with Earth&apos;s natural vibration"}
              {currentFrequency === '528hz' && "Frequency of transformation and healing"}
              {currentFrequency === '741hz' && "Awakens intuition and inner wisdom"}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
