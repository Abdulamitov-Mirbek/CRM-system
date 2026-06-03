'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Trash2, 
  Edit2, 
  CheckCircle2, 
  XCircle, 
  LayoutGrid, 
  UtensilsCrossed,
  Save,
  X
} from 'lucide-react';
import { menuService } from '@/services/api';
import { Category, MenuItem } from '@/types/menu';
import { cn } from '@/lib/utils';

export default function MenuManagementPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [isAddingItem, setIsAddingItem] = useState<string | null>(null);
  const [newItem, setNewItem] = useState<Partial<MenuItem>>({
    name: '',
    description: '',
    price: 0,
  });

  const fetchMenu = async () => {
    setLoading(true);
    try {
      const data = await menuService.getCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching menu:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;
    try {
      const created = await menuService.createCategory(newCategoryName);
      setCategories([...categories, { ...created, items: [] }]);
      setNewCategoryName('');
    } catch (error) {
      alert('Ошибка при создании категории');
    }
  };

  const handleAddItem = async (categoryId: string) => {
    if (!newItem.name?.trim()) return;
    try {
      const created = await menuService.createMenuItem({ ...newItem, categoryId });
      setCategories(categories.map(c => 
        c.id === categoryId ? { ...c, items: [...c.items, created] } : c
      ));
      setIsAddingItem(null);
      setNewItem({ name: '', description: '', price: 0 });
    } catch (error) {
      alert('Ошибка при создании позиции');
    }
  };

  const toggleAvailability = async (item: MenuItem) => {
    try {
      await menuService.updateAvailability(item.id, !item.isAvailable);
      setCategories(categories.map(c => ({
        ...c,
        items: c.items.map(i => i.id === item.id ? { ...i, isAvailable: !i.isAvailable } : i)
      })));
    } catch (error) {
      alert('Ошибка при обновлении доступности');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Управление Меню</h1>
          <p className="text-white/40 mt-1">Категории, блюда и напитки вашего заведения</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <aside className="lg:col-span-1 space-y-6">
          <div className="glass-panel p-6 rounded-3xl space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-white/40">Новая категория</h2>
            <form onSubmit={handleAddCategory} className="space-y-4">
              <input 
                value={newCategoryName}
                onChange={e => setNewCategoryName(e.target.value)}
                placeholder="Название категории"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-velocity-cyan/50"
              />
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-velocity-purple text-white font-bold hover:shadow-neon-purple transition-all"
              >
                <Plus size={18} />
                Добавить категорию
              </button>
            </form>
          </div>
        </aside>

        <div className="lg:col-span-2 space-y-6">
          {categories.map((category) => (
            <div key={category.id} className="glass-panel rounded-3xl overflow-hidden">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <LayoutGrid className="text-velocity-cyan" size={20} />
                  <h3 className="font-bold text-lg">{category.name}</h3>
                </div>
                <button 
                  onClick={() => setIsAddingItem(category.id)}
                  className="p-2 rounded-xl bg-velocity-cyan/10 text-velocity-cyan hover:bg-velocity-cyan hover:text-background transition-all"
                >
                  <Plus size={20} />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {isAddingItem === category.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-4 mb-6"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        placeholder="Название блюда"
                        value={newItem.name}
                        onChange={e => setNewItem({...newItem, name: e.target.value})}
                        className="bg-background border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-velocity-cyan/50"
                      />
                      <input 
                        type="number"
                        placeholder="Цена"
                        value={newItem.price}
                        onChange={e => setNewItem({...newItem, price: parseFloat(e.target.value)})}
                        className="bg-background border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-daamda-cyan/50"
                      />
                      <input 
                        placeholder="Описание"
                        value={newItem.description}
                        onChange={e => setNewItem({...newItem, description: e.target.value})}
                        className="col-span-2 bg-background border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-velocity-cyan/50"
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <button onClick={() => setIsAddingItem(null)} className="p-2 text-white/40 hover:text-white"><X size={20} /></button>
                      <button onClick={() => handleAddItem(category.id)} className="px-4 py-2 bg-velocity-cyan text-background rounded-xl font-bold text-sm">Сохранить</button>
                    </div>
                  </motion.div>
                )}

                {category.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center group">
                    <div className="flex items-center gap-4">
                      <div className={cn("w-2 h-2 rounded-full", item.isAvailable ? "bg-emerald-400" : "bg-rose-400")} />
                      <div>
                        <p className={cn("font-bold text-sm", !item.isAvailable && "text-white/20 line-through")}>{item.name}</p>
                        <p className="text-xs text-white/40">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="font-bold text-daamda-purple">{item.price} kgs som</span>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => toggleAvailability(item)}
                          className={cn("p-2 rounded-lg transition-all", item.isAvailable ? "bg-rose-400/10 text-rose-400" : "bg-emerald-400/10 text-emerald-400")}
                        >
                          {item.isAvailable ? <XCircle size={16} /> : <CheckCircle2 size={16} />}
                        </button>
                        <button className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-white transition-all">
                          <Edit2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {category.items.length === 0 && !isAddingItem && (
                  <p className="text-center py-4 text-xs text-white/20 uppercase tracking-widest">Нет позиций</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
