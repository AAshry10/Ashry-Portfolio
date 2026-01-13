import React, { useEffect, useMemo, useState } from 'react';
import './TeckStack.css';
import teckStackData from '../../JSON DB/TeckStack.json';

const normalizeTeckStack = (data) => {
  if (!data) return [];

  // Preferred shape:
  // [{ category: string, items: [{ name, icon?, level? }] }]
  if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0]?.items)) {
    return data
      .map((group) => ({
        category: group.category || 'Tech Stack',
        items: Array.isArray(group.items) ? group.items : [],
      }))
      .filter((g) => g.items.length > 0);
  }

  // Flat list fallback:
  // [{ name, icon?, level?, category? }]
  if (Array.isArray(data)) {
    const byCategory = new Map();
    data.forEach((item) => {
      const category = item?.category || 'Tech Stack';
      if (!byCategory.has(category)) byCategory.set(category, []);
      byCategory.get(category).push(item);
    });

    return Array.from(byCategory.entries()).map(([category, items]) => ({
      category,
      items,
    }));
  }

  return [];
};

const TeckStack = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    setGroups(normalizeTeckStack(teckStackData));
  }, []);

  const totalCount = useMemo(() => {
    return groups.reduce((acc, g) => acc + (g.items?.length || 0), 0);
  }, [groups]);

  return (
    <section className="techstack" id="TeckStack">
      <div className="techstack-container">
        <div className="techstack-header">
          <h2>Tech Stack</h2>
          <p>
            A quick snapshot of the technologies I use most often{totalCount ? ` (${totalCount}).` : '.'}
          </p>
        </div>

        <div className="techstack-grid" role="list">
          {groups.map((group) => (
            <article key={group.category} className="techstack-card" role="listitem">
              <div className="techstack-card-header">
                <h3>{group.category}</h3>
                <span className="techstack-count">{group.items.length}</span>
              </div>

              <div className="techstack-items">
                 {group.items.map((item) => (
                   <span key={`${group.category}-${item.name}`} className="techstack-pill">
                     {item.icon ? (
                       item.icon.startsWith('/') || item.icon.endsWith('.svg') || item.icon.endsWith('.png') ? (
                         <img
                           src={item.icon}
                           alt=""
                           aria-hidden="true"
                           className="techstack-icon-img"
                           loading="lazy"
                         />
                       ) : (
                         <i className={item.icon} aria-hidden="true"></i>
                       )
                     ) : null}
                    <span className="techstack-pill-name">{item.name}</span>
                    {item.level ? <span className="techstack-pill-level">{item.level}</span> : null}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeckStack;