'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, BarChart3, TrendingUp, MoreHorizontal } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from 'recharts';

const pipelineData = [
  { stage: 'Lead', count: 12, value: 450000, color: '#8b5cf6' },
  { stage: 'Discovery', count: 8, value: 320000, color: '#a78bfa' },
  { stage: 'Proposal', count: 5, value: 850000, color: '#4cd7f6' },
  { stage: 'Closing', count: 3, value: 1200000, color: '#22d3ee' },
];

const deals = {
  Lead: [
    { id: 1, company: 'Stark Industries', deal: 'Arc Reactor Supply', budget: '$500k', velocity: 'up' },
    { id: 2, company: 'Wayne Ent.', deal: 'Defense Systems', budget: '$1.2M', velocity: 'stable' },
  ],
  Discovery: [
    { id: 3, company: 'Oscorp', deal: 'Biotech Research', budget: '$250k', velocity: 'up' },
  ],
  Proposal: [
    { id: 4, company: 'LexCorp', deal: 'Infrastructure', budget: '$800k', velocity: 'down' },
  ],
  Closing: [
    { id: 5, company: 'Pied Piper', deal: 'Cloud Compression', budget: '$2.5M', velocity: 'up' },
  ]
};

const PipelineCard = ({ deal }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-panel p-4 rounded-2xl mb-4 group cursor-grab active:cursor-grabbing"
  >
    <div className="flex justify-between items-start mb-3">
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">{deal.company}</span>
      <button className="text-white/20 hover:text-white transition-colors">
        <MoreHorizontal size={14} />
      </button>
    </div>
    <h4 className="text-sm font-bold mb-3 group-hover:text-velocity-cyan transition-colors">{deal.deal}</h4>
    <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
      <span className="text-sm font-bold text-velocity-purple">{deal.budget}</span>
      <div className={`p-1 rounded-md ${deal.velocity === 'up' ? 'text-emerald-400 bg-emerald-400/10' : deal.velocity === 'down' ? 'text-rose-400 bg-rose-400/10' : 'text-white/20 bg-white/5'}`}>
        <TrendingUp size={12} className={deal.velocity === 'down' ? 'rotate-180' : ''} />
      </div>
    </div>
  </motion.div>
);

export default function PipelinePage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Deal Pipeline</h1>
          <p className="text-white/40 mt-1">Strategic flow and revenue forecasting</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-velocity-purple text-white font-bold shadow-neon-purple hover:scale-105 transition-all">
          <Plus size={20} />
          <span>Create Deal</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-[600px]">
        {Object.entries(deals).map(([stage, stageDeals]) => (
          <div key={stage} className="flex flex-col">
            <div className="flex justify-between items-center mb-4 px-2">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${stage === 'Closing' ? 'bg-emerald-400' : 'bg-velocity-purple'}`} />
                <h3 className="font-bold text-sm uppercase tracking-widest">{stage}</h3>
              </div>
              <span className="text-xs text-white/20 font-bold">{stageDeals.length}</span>
            </div>
            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-3xl p-4 overflow-y-auto scrollbar-hide">
              {stageDeals.map(deal => (
                <PipelineCard key={deal.id} deal={deal} />
              ))}
              <button className="w-full py-3 rounded-2xl border border-dashed border-white/10 text-white/20 text-xs font-bold uppercase tracking-widest hover:border-white/20 hover:text-white/40 transition-all">
                Add Deal
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel p-8 rounded-3xl">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <BarChart3 className="text-velocity-cyan" />
            <h2 className="text-xl font-bold">Velocity Forecast</h2>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 text-xs font-bold text-white/40 uppercase tracking-widest">
            Expected Revenue: $2.82M
          </div>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={pipelineData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="stage" axisLine={false} tickLine={false} tick={{fill: 'rgba(255,255,255,0.2)', fontSize: 12}} dy={10} />
              <YAxis hide />
              <Tooltip 
                cursor={{fill: 'rgba(255,255,255,0.02)'}}
                contentStyle={{ backgroundColor: '#0b1326', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
              />
              <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                {pipelineData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
