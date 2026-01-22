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

        <div className="techstack-groups">
          {groups.map((group) => (
            <section key={group.category} className="techstack-group" aria-label={group.category}>
              <div className="techstack-group-header">
                <h3 className="techstack-group-title">{group.category}</h3>
              </div>

              <div className="techstack-items-grid" role="list">
                {group.items.map((item) => (
                  <article key={`${group.category}-${item.name}`} className="techstack-item" role="listitem">
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

                    <div className="techstack-item-text">
                      <span className="techstack-item-name">{item.name}</span>
                      {item.level ? <span className="techstack-item-level">{item.level}</span> : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeckStack;