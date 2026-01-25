import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConversation } from '@elevenlabs/react';
import {
  Phone, Mic, MicOff, PhoneOff, Loader2, Calendar, Clock, MessageSquare,
  CheckCircle, Sparkles, Headphones, TrendingUp, Users, DollarSign,
  Zap, BarChart3, ArrowRight, Play, Star, Shield, Globe, Building2,
  Code, Plug, Settings, Repeat, Check, X, Rocket, Languages, Bell,
  Brain, Video, FileText, Mail, Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const VoiceAIProductDemo: React.FC = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID;

  const conversation = useConversation({
    agentId: agentId || '',
    onConnect: () => {
      setError(null);
    },
    onDisconnect: () => {
      setIsMuted(false);
    },
    onError: (err) => {
      console.error('Voice agent error:', err);
      setError('Connection failed. Please try again.');
    },
    onMessage: (message) => {
      console.log('Message:', message);
    },
  });

  const isConnected = conversation.status === 'connected';
  const isConnecting = conversation.status === 'connecting';

  const handleConnect = async () => {
    setError(null);
    try {
      await conversation.startSession({
        agentId: agentId || '',
        connectionType: 'webrtc',
      });
    } catch (err) {
      console.error('Failed to start session:', err);
      setError('Failed to connect. Please try again.');
    }
  };

  const handleDisconnect = async () => {
    try {
      await conversation.endSession();
    } catch (err) {
      console.error('Failed to end session:', err);
    }
    setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Top Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-full border border-purple-400/30">
                <Sparkles className="w-5 h-5 text-purple-300" />
                <span className="text-white font-semibold">The Future of Customer Service is Here</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-12">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
                Your AI-Powered
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Virtual Receptionist
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Never miss a call again. Our AI Voice Agent handles appointments, answers questions, and manages your schedule
                <span className="text-purple-400 font-bold"> 24/7/365</span> — just like a human receptionist, but better.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Button
                  onClick={() => document.getElementById('live-demo')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-xl rounded-full shadow-2xl transform transition hover:scale-105"
                >
                  <Play className="w-6 h-6 mr-2" />
                  Try Live Demo
                </Button>
                <Button
                  onClick={() => navigate('/demo-dashboard')}
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-400 text-white hover:bg-purple-400/10 px-8 py-6 text-xl rounded-full backdrop-blur-md"
                >
                  <BarChart3 className="w-6 h-6 mr-2 text-black" />
                  <span className="text-black">View Dashboard Demo</span>
                </Button>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">2.8K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">500K+</div>
                <div className="text-gray-300">Calls Handled</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Demo Section */}
      <div id="video-demo" className="py-20 bg-gradient-to-b from-slate-900 to-purple-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md rounded-full border border-pink-400/30 mb-6">
                <Video className="w-5 h-5 text-pink-300" />
                <span className="text-white font-semibold">Watch Demo</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-4">
                See It In Action
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Watch how our AI Voice Agent handles real conversations, books appointments, and delivers exceptional customer service.
              </p>
            </div>

            {/* Video Container */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-3xl shadow-2xl p-4 md:p-6 border-2 border-purple-400/30">
              <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://share.descript.com/embed/7BJaQorOwH8"
                  className="absolute top-0 left-0 w-full h-full rounded-2xl border-0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>

            {/* Video Caption */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                This demo showcases a real conversation with our AI receptionist handling appointment booking
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Live Demo Section */}
      <div id="live-demo" className="py-20 bg-gradient-to-b from-purple-950 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-4">
                Experience It Live
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Try our AI receptionist right now. Book a fake appointment, ask questions, or test any scenario you can think of.
              </p>
            </div>

            {/* Voice Interface Card */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-purple-400/30">
              <div className="flex flex-col items-center">
                {/* Status Indicator */}
                <div className="mb-8">
                  <div className={`relative w-48 h-48 rounded-full flex items-center justify-center shadow-2xl ${
                    isConnected ? 'bg-gradient-to-br from-green-400 to-emerald-600' :
                    isConnecting ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                    'bg-gradient-to-br from-purple-500 to-pink-600'
                  }`}>
                    {isConnecting ? (
                      <Loader2 className="w-24 h-24 text-white animate-spin" />
                    ) : isConnected ? (
                      <Headphones className="w-24 h-24 text-white" />
                    ) : (
                      <Phone className="w-24 h-24 text-white" />
                    )}
                    {isConnected && (
                      <>
                        <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-30"></div>
                        <div className="absolute -inset-6 rounded-full border-4 border-green-300 animate-pulse"></div>
                      </>
                    )}
                  </div>
                </div>

                {/* Status Text */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {isConnected ? '🎧 AI Receptionist Connected' : isConnecting ? '⏳ Connecting...' : '📞 Ready to Demonstrate'}
                  </h3>
                  <p className="text-lg text-gray-300 max-w-md mx-auto">
                    {isConnected ?
                      'The AI is listening. Try saying: "Id like to book an appointment for next Tuesday"' :
                      'Click below to start a live conversation with our AI receptionist'
                    }
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="w-full mb-6 p-4 bg-red-500/20 border border-red-400 rounded-lg backdrop-blur-sm">
                    <p className="text-red-200 text-center">{error}</p>
                  </div>
                )}

                {/* Control Buttons */}
                <div className="flex gap-4 flex-wrap justify-center">
                  {!isConnected && !isConnecting && (
                    <Button
                      onClick={handleConnect}
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-8 text-2xl rounded-full shadow-2xl transform transition hover:scale-110"
                      disabled={!agentId}
                    >
                      <Phone className="w-8 h-8 mr-3" />
                      Start Live Demo
                    </Button>
                  )}

                  {isConnected && (
                    <>
                      <Button
                        onClick={toggleMute}
                        size="lg"
                        variant="outline"
                        className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-7 text-lg rounded-full backdrop-blur-md text-black"
                      >
                        {isMuted ? (
                          <>
                            <MicOff className="w-6 h-6 mr-2" />
                            <span className="text-black">Unmute</span>
                          </>
                        ) : (
                          <>
                            <Mic className="w-6 h-6 mr-2" />
                            <span className="text-black">Mute</span>
                          </>
                        )}
                      </Button>

                      <Button
                        onClick={handleDisconnect}
                        size="lg"
                        variant="destructive"
                        className="px-8 py-7 text-lg rounded-full shadow-lg"
                      >
                        <PhoneOff className="w-6 h-6 mr-2" />
                        End Demo
                      </Button>
                    </>
                  )}
                </div>

                {/* Demo Suggestions */}
                {!isConnected && (
                  <div className="mt-8 w-full max-w-2xl">
                    <p className="text-purple-300 text-sm font-semibold mb-3">Try asking:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-purple-400/20">
                        <p className="text-white text-sm">"What services do you offer?"</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-purple-400/20">
                        <p className="text-white text-sm">"I need to book an appointment"</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-purple-400/20">
                        <p className="text-white text-sm">"What are your hours?"</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-purple-400/20">
                        <p className="text-white text-sm">"Can I reschedule my appointment?"</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                Why Businesses Love Our AI Receptionist
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to automate customer interactions and never miss an opportunity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Cards */}
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-md rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Smart Scheduling</h3>
                <p className="text-gray-300">
                  Automatically book, reschedule, and manage appointments with calendar sync and conflict detection.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-md rounded-2xl p-8 border border-pink-400/30 hover:border-pink-400/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">24/7 Availability</h3>
                <p className="text-gray-300">
                  Never miss a call again. Our AI works around the clock, handling calls even when you're sleeping.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-md rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Natural Conversations</h3>
                <p className="text-gray-300">
                  Powered by advanced AI that understands context, intent, and speaks like a real human receptionist.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-md rounded-2xl p-8 border border-green-400/30 hover:border-green-400/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Analytics Dashboard</h3>
                <p className="text-gray-300">
                  Track every call, measure performance, and get insights to optimize your customer service.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 backdrop-blur-md rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Instant Setup</h3>
                <p className="text-gray-300">
                  Get started in minutes. No complex integrations, no technical knowledge required.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/30 backdrop-blur-md rounded-2xl p-8 border border-indigo-400/30 hover:border-indigo-400/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">HIPAA Compliant</h3>
                <p className="text-gray-300">
                  Enterprise-grade security with full HIPAA compliance for healthcare and medical practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Section */}
      <div className="py-20 bg-gradient-to-b from-purple-950 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                The Numbers Speak for Themselves
              </h2>
              <p className="text-xl text-gray-300">
                See how our AI receptionist transforms businesses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-3xl p-10 border border-green-400/30 text-center">
                <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <div className="text-6xl font-black text-white mb-2">89%</div>
                <div className="text-xl text-gray-300 mb-2">Cost Reduction</div>
                <p className="text-gray-400 text-sm">vs hiring a full-time receptionist</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-md rounded-3xl p-10 border border-blue-400/30 text-center">
                <Users className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <div className="text-6xl font-black text-white mb-2">2.5x</div>
                <div className="text-xl text-gray-300 mb-2">More Bookings</div>
                <p className="text-gray-400 text-sm">by capturing after-hours calls</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl p-10 border border-purple-400/30 text-center">
                <Star className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <div className="text-6xl font-black text-white mb-2">4.8/5</div>
                <div className="text-xl text-gray-300 mb-2">Customer Rating</div>
                <p className="text-gray-400 text-sm">based on 500+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                Perfect for Every Industry
              </h2>
              <p className="text-xl text-gray-300">
                From healthcare to real estate, our AI adapts to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-2xl p-8 border border-purple-400/30">
                <Building2 className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Healthcare & Medical</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Patient appointment scheduling and reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Insurance verification and pre-visit questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>HIPAA-compliant patient data handling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-md rounded-2xl p-8 border border-blue-400/30">
                <Globe className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Real Estate</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Property showing scheduling and coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Lead qualification and follow-up</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Property information and availability</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-md rounded-2xl p-8 border border-green-400/30">
                <Sparkles className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Salons & Spas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Service booking and stylist assignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Package information and pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Membership and loyalty program management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-md rounded-2xl p-8 border border-orange-400/30">
                <DollarSign className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Professional Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Consultation scheduling for lawyers, accountants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Initial client intake and screening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Service information and fee structures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration & Deployment Section */}
      <div className="py-20 bg-gradient-to-b from-slate-900 to-purple-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                Seamless Integration with Any System
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Voice Agent integrates effortlessly with your existing tools and workflows.
                No matter what industry you're in, we'll fit right into your tech stack.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-md rounded-2xl p-8 border border-blue-400/30">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Code className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">API-First Architecture</h3>
                <p className="text-gray-300 mb-4">
                  RESTful APIs and webhooks make it easy to integrate with any platform. Full documentation and SDKs included.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    REST & GraphQL APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Webhook notifications
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Real-time updates
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-2xl p-8 border border-purple-400/30">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Plug className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Pre-Built Integrations</h3>
                <p className="text-gray-300 mb-4">
                  Connect instantly with popular CRMs, calendars, and business tools you already use.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Salesforce, HubSpot, Zoho
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Google Calendar, Outlook
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Slack, Microsoft Teams
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-md rounded-2xl p-8 border border-green-400/30">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Custom Deployment</h3>
                <p className="text-gray-300 mb-4">
                  White-label solutions, on-premise deployment, or cloud hosting—we support all deployment models.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Cloud or on-premise
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    White-label branding
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Custom voice training
                  </li>
                </ul>
              </div>
            </div>

            {/* Industries Grid */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-md rounded-3xl p-10 border border-purple-400/30">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Trusted Across Industries</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'Healthcare', 'Real Estate', 'Legal Services', 'Dental Practices',
                  'Salons & Spas', 'Financial Services', 'Home Services', 'Automotive',
                  'Veterinary', 'Fitness Centers', 'Insurance', 'Travel & Hospitality'
                ].map((industry, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all">
                    <p className="text-white font-semibold">{industry}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                Flexible Pricing for Every Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your needs. From single agents to enterprise solutions with unlimited agents.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Starter Plan */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-purple-500 transition-all hover:shadow-2xl hover:shadow-purple-500/50">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Single Agent</h3>
                  <p className="text-gray-400 mb-6">Perfect for small businesses</p>
                  <div className="mb-6">
                    <span className="text-5xl font-black text-white">$299</span>
                    <span className="text-gray-400 text-lg">/month</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg rounded-full shadow-lg">
                    Get Started
                  </Button>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">1 AI Voice Agent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Up to 500 calls/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Basic analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Email support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Calendar integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Custom greetings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-500">Advanced AI training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-500">API access</span>
                  </li>
                </ul>
              </div>

              {/* Professional Plan - Most Popular */}
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-3xl p-8 border-2 border-purple-400 shadow-2xl shadow-purple-500/50 transform scale-105 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm">
                    MOST POPULAR
                  </div>
                </div>
                <div className="text-center mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Multi-Agent</h3>
                  <p className="text-purple-200 mb-6">For growing businesses</p>
                  <div className="mb-6">
                    <span className="text-5xl font-black text-white">$699</span>
                    <span className="text-purple-200 text-lg">/month</span>
                  </div>
                  <Button className="w-full bg-white text-purple-900 hover:bg-gray-100 py-6 text-lg rounded-full shadow-lg font-bold">
                    Get Started
                  </Button>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-white font-semibold">Up to 5 AI Voice Agents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-white font-semibold">Up to 2,500 calls/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-white font-semibold">Advanced analytics & reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-white font-semibold">Priority support (24/7)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-white font-semibold">All integrations included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-white font-semibold">Custom voice & personality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-white font-semibold">Advanced AI training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-white font-semibold">API access</span>
                  </li>
                </ul>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-blue-500 transition-all hover:shadow-2xl hover:shadow-blue-500/50">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <p className="text-gray-400 mb-6">For large organizations</p>
                  <div className="mb-6">
                    <span className="text-5xl font-black text-white">Custom</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg rounded-full shadow-lg">
                    Contact Sales
                  </Button>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 font-semibold">Unlimited AI Voice Agents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 font-semibold">Unlimited calls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 font-semibold">White-label solution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 font-semibold">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 font-semibold">On-premise deployment option</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 font-semibold">Custom AI model training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 font-semibold">SLA guarantees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 font-semibold">Priority feature development</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* One-Time Purchase Option */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-md rounded-3xl p-10 border-2 border-indigo-400/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full mb-4">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-300 font-semibold text-sm">ONE-TIME PURCHASE</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Lifetime License</h3>
                  <p className="text-gray-300 text-lg mb-4">
                    Own your AI Voice Agent forever with a one-time payment. Perfect for agencies reselling to clients.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      1 AI Voice Agent license (perpetual)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      All features included
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Free updates for 1 year
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Resell with your own branding
                    </li>
                  </ul>
                </div>
                <div className="text-center md:text-right">
                  <div className="mb-4">
                    <div className="text-gray-400 text-lg line-through mb-2">$9,999</div>
                    <div className="text-6xl font-black text-white mb-2">$4,999</div>
                    <div className="text-purple-300 text-lg">One-time payment</div>
                  </div>
                  <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-10 py-6 text-xl rounded-full shadow-2xl">
                    Buy Now
                  </Button>
                  <p className="text-sm text-gray-400 mt-3">50% launch discount</p>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Popular Add-ons</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <Repeat className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h4 className="text-white font-bold mb-2">Extra Calls</h4>
                  <p className="text-gray-400 text-sm mb-3">$0.20/call</p>
                  <p className="text-xs text-gray-500">Beyond plan limit</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-white font-bold mb-2">Additional Agent</h4>
                  <p className="text-gray-400 text-sm mb-3">$199/month</p>
                  <p className="text-xs text-gray-500">Add more agents</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <Code className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h4 className="text-white font-bold mb-2">Custom Integration</h4>
                  <p className="text-gray-400 text-sm mb-3">$499 one-time</p>
                  <p className="text-xs text-gray-500">Bespoke connections</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <Sparkles className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <h4 className="text-white font-bold mb-2">AI Fine-tuning</h4>
                  <p className="text-gray-400 text-sm mb-3">$999 one-time</p>
                  <p className="text-xs text-gray-500">Industry-specific</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Future Roadmap Section */}
      <div className="py-20 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-full border border-purple-400/30 mb-6">
                <Rocket className="w-5 h-5 text-purple-300" />
                <span className="text-white font-bold">COMING SOON</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                The Future is Even Brighter
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're constantly innovating to bring you cutting-edge features that will revolutionize
                how your business communicates with customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Real Phone Number Integration */}
              <div className="group bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-md rounded-3xl p-8 border-2 border-blue-400/30 hover:border-blue-400 transition-all hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-2 duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-9 h-9 text-white" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full mb-4">
                    <span className="text-blue-300 text-xs font-bold">Q2 2025</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Real Phone Integration</h3>
                <p className="text-gray-300 mb-4">
                  Connect your existing business phone numbers directly to the AI agent. No separate lines needed—seamless integration with your current phone system.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    Port existing numbers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    VoIP & landline support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    Call forwarding & routing
                  </li>
                </ul>
              </div>

              {/* Proactive Outbound Calling */}
              <div className="group bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-3xl p-8 border-2 border-purple-400/30 hover:border-purple-400 transition-all hover:shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-2 duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Bell className="w-9 h-9 text-white" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 rounded-full mb-4">
                    <span className="text-purple-300 text-xs font-bold">Q2 2025</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Outbound Reminder System</h3>
                <p className="text-gray-300 mb-4">
                  Let your AI agent proactively call customers with appointment reminders, follow-ups, payment reminders, and personalized outreach campaigns.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    Automated appointment reminders
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    Post-visit follow-ups
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    Custom outreach campaigns
                  </li>
                </ul>
              </div>

              {/* Multi-Language Support */}
              <div className="group bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-md rounded-3xl p-8 border-2 border-green-400/30 hover:border-green-400 transition-all hover:shadow-2xl hover:shadow-green-500/50 hover:-translate-y-2 duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Languages className="w-9 h-9 text-white" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full mb-4">
                    <span className="text-green-300 text-xs font-bold">Q3 2025</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Multi-Language AI</h3>
                <p className="text-gray-300 mb-4">
                  Serve global customers with AI agents fluent in 50+ languages. Auto-detect language and respond naturally in the customer's preferred language.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    50+ languages supported
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Auto-language detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Real-time translation
                  </li>
                </ul>
              </div>

              {/* AI Video Calls */}
              <div className="group bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-md rounded-3xl p-8 border-2 border-orange-400/30 hover:border-orange-400 transition-all hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-2 duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Video className="w-9 h-9 text-white" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 rounded-full mb-4">
                    <span className="text-orange-300 text-xs font-bold">Q3 2025</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">AI Video Receptionist</h3>
                <p className="text-gray-300 mb-4">
                  Take customer interaction to the next level with a lifelike AI video avatar that provides face-to-face assistance on your website or kiosks.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400" />
                    Realistic AI avatars
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400" />
                    Lip-sync & expressions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400" />
                    Custom avatar creation
                  </li>
                </ul>
              </div>

              {/* Advanced Sentiment Analysis */}
              <div className="group bg-gradient-to-br from-pink-900/40 to-rose-900/40 backdrop-blur-md rounded-3xl p-8 border-2 border-pink-400/30 hover:border-pink-400 transition-all hover:shadow-2xl hover:shadow-pink-500/50 hover:-translate-y-2 duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-9 h-9 text-white" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-500/20 rounded-full mb-4">
                    <span className="text-pink-300 text-xs font-bold">Q4 2025</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Emotion AI & Sentiment</h3>
                <p className="text-gray-300 mb-4">
                  AI that understands customer emotions in real-time, adapting tone and approach based on sentiment to provide empathetic, personalized responses.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-pink-400" />
                    Real-time emotion detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-pink-400" />
                    Adaptive conversation style
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-pink-400" />
                    Escalation to human agents
                  </li>
                </ul>
              </div>

              {/* Smart Document Processing */}
              <div className="group bg-gradient-to-br from-indigo-900/40 to-violet-900/40 backdrop-blur-md rounded-3xl p-8 border-2 border-indigo-400/30 hover:border-indigo-400 transition-all hover:shadow-2xl hover:shadow-indigo-500/50 hover:-translate-y-2 duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-9 h-9 text-white" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 rounded-full mb-4">
                    <span className="text-indigo-300 text-xs font-bold">Q4 2025</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Document AI Processing</h3>
                <p className="text-gray-300 mb-4">
                  AI that can read, understand, and process documents during calls—intake forms, insurance cards, prescriptions, contracts, and more.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400" />
                    OCR & document scanning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400" />
                    Automated data extraction
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400" />
                    Form pre-filling
                  </li>
                </ul>
              </div>

              {/* Email & SMS Integration */}
              <div className="group bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-md rounded-3xl p-8 border-2 border-cyan-400/30 hover:border-cyan-400 transition-all hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-2 duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-9 h-9 text-white" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 rounded-full mb-4">
                    <span className="text-cyan-300 text-xs font-bold">Q1 2026</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Omnichannel AI Agent</h3>
                <p className="text-gray-300 mb-4">
                  One AI agent handling voice calls, emails, SMS, WhatsApp, and live chat—all maintaining context and conversation history across channels.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    Unified conversation history
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    Cross-channel context
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    WhatsApp & SMS integration
                  </li>
                </ul>
              </div>

              {/* AI Voice Cloning */}
              <div className="group bg-gradient-to-br from-yellow-900/40 to-orange-900/40 backdrop-blur-md rounded-3xl p-8 border-2 border-yellow-400/30 hover:border-yellow-400 transition-all hover:shadow-2xl hover:shadow-yellow-500/50 hover:-translate-y-2 duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-9 h-9 text-white" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 rounded-full mb-4">
                    <span className="text-yellow-300 text-xs font-bold">Q1 2026</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Custom Voice Cloning</h3>
                <p className="text-gray-300 mb-4">
                  Clone your own voice or hire professional voice actors to create a truly unique AI agent that sounds exactly how you want—preserving your brand identity.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-400" />
                    Personal voice cloning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-400" />
                    Professional voice library
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-400" />
                    Accent & dialect control
                  </li>
                </ul>
              </div>

              {/* Advanced Analytics & AI Insights */}
              <div className="group bg-gradient-to-br from-teal-900/40 to-green-900/40 backdrop-blur-md rounded-3xl p-8 border-2 border-teal-400/30 hover:border-teal-400 transition-all hover:shadow-2xl hover:shadow-teal-500/50 hover:-translate-y-2 duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-9 h-9 text-white" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 rounded-full mb-4">
                    <span className="text-teal-300 text-xs font-bold">Q2 2026</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Predictive AI Analytics</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered insights that predict customer behavior, identify revenue opportunities, suggest optimizations, and automatically improve agent performance over time.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    Predictive call outcomes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    Revenue opportunity detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    Self-improving AI models
                  </li>
                </ul>
              </div>
            </div>

            {/* Early Access CTA */}
            <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Want Early Access to These Features?
              </h3>
              <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto">
                Join our beta program and be the first to test cutting-edge AI capabilities before they're publicly released.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-2xl font-bold">
                  Join Beta Program
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-md font-bold"
                >
                  <span className="text-black">Request Feature</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Join 2,800+ businesses using our AI receptionist to automate customer service and boost revenue.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => navigate('/demo-dashboard')}
                size="lg"
                className="bg-white text-purple-900 hover:bg-gray-100 px-10 py-7 text-xl rounded-full shadow-2xl transform transition hover:scale-105 font-bold"
              >
                <BarChart3 className="w-6 h-6 mr-2" />
                View Live Dashboard
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
              <Button
                onClick={() => document.getElementById('live-demo')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-xl rounded-full backdrop-blur-md font-bold"
              >
                <Play className=" text-black w-6 h-6 mr-2" />
                <span className="text-black">Try Another Demo</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAIProductDemo;
