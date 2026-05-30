'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, BarChart3, TrendingUp, MoreHorizontal, Loader2 } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from 'recharts';

const stages = ['Lead', 'Discovery', 'Proposal', 'Closing'];
const stageNames: Record<string, string> = {
  'Lead': 'Лид',
  'Discovery': 'Дискавери',
  'Proposal': 'Предложение',
  'Closing': 'Закрытие'
};

const PipelineCard = ({ deal }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-panel p-4 rounded-2xl mb-4 group cursor-pointer"
  >
    <div className="flex justify-between items-start mb-3">
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{deal.company || 'Приватная'}</span>
      <button className="text-white/20 hover:text-white transition-colors">
        <MoreHorizontal size={14} />
      </button>
    </div>
    <h4 className="text-sm font-bold mb-3 group-hover:text-velocity-cyan transition-colors">{deal.title}</h4>
    <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
      <span className="text-sm font-bold text-velocity-purple">${(deal.value / 1000).toFixed(1)}k</span>
      <div className="p-1 rounded-md text-emerald-400 bg-emerald-400/10">
        <TrendingUp size={12} />
      </div>
    </div>
  </motion.div>
);

export default function PipelinePage() {
  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/deals')
      .then(res => res.json())
      .then(data => {
        setDeals(data);
        setLoading(false);
      });
  }, []);

  const dealsByStage = stages.reduce((acc: any, stage) => {
    acc[stage] = deals.filter(d => d.stage === stage);
    return acc;
  }, {});

  const pipelineChartData = stages.map(stage => ({
    stage: stageNames[stage],
    value: dealsByStage[stage]?.reduce((acc: any, d: any) => acc + d.value, 0) || 0,
    color: stage === 'Closing' ? '#22d3ee' : '#8b5cf6'
  }));

  if (loading) return (
    <div className="h-[80vh] flex items-center justify-center">
      <Loader2 className="animate-spin text-velocity-cyan" size={48} />
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Пайплайн сделок</h1>
          <p className="text-white/40 mt-1">Стратегический поток и прогнозирование выручки</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-velocity-purple text-white font-bold shadow-neon-purple hover:scale-105 transition-all">
          <Plus size={20} />
          <span>Создать сделку</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-[600px]">
        {stages.map((stage) => (
          <div key={stage} className="flex flex-col">
            <div className="flex justify-between items-center mb-4 px-2">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${stage === 'Closing' ? 'bg-emerald-400' : 'bg-velocity-purple'}`} />
                <h3 className="font-bold text-sm uppercase tracking-widest">{stageNames[stage]}</h3>
              </div>
              <span className="text-xs text-white/20 font-bold">{dealsByStage[stage]?.length || 0}</span>
            </div>
            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-3xl p-4 overflow-y-auto scrollbar-hide">
              {dealsByStage[stage]?.map((deal: any) => (
                <PipelineCard key={deal.id} deal={deal} />
              ))}
              {dealsByStage[stage]?.length === 0 && (
                <div className="text-center py-10 text-white/10 text-xs uppercase tracking-widest">Нет сделок</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel p-8 rounded-3xl">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <BarChart3 className="text-velocity-cyan" />
            <h2 className="text-xl font-bold">Прогноз Velocity</h2>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 text-xs font-bold text-white/40 uppercase tracking-widest">
            Общий пайплайн: ${(deals.reduce((acc, d) => acc + d.value, 0) / 1000).toFixed(1)}k
          </div>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={pipelineChartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="stage" axisLine={false} tickLine={false} tick={{fill: 'rgba(255,255,255,0.2)', fontSize: 12}} dy={10} />
              <YAxis hide />
              <Tooltip 
                cursor={{fill: 'rgba(255,255,255,0.02)'}}
                contentStyle={{ backgroundColor: '#0b1326', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
              />
              <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                {pipelineChartData.map((entry, index) => (
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
