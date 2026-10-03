import { useState } from 'react';
import CertificatePopup from '../CertificatePopup/CertificatePopup';
import './OdooAffiliate.css';

const OdooAffiliate = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <aside className="odoo-affiliate" aria-label="Odoo recommendation">
        <div className="odoo-affiliate-icon">
          <img src="/assets/Images/Icons/OdooLogo.png" alt="Odoo" />
        </div>

        <div className="odoo-affiliate-copy">
          <div className="odoo-affiliate-heading">
            <strong>Odoo ERP</strong>
          </div>
          <p>All-in-one business apps: accounting, sales, purchase, inventory, website, e-commerce and more all in one place. Try it now.</p>
        </div>

        <button
          className="odoo-affiliate-cta odoo-affiliate-demo-btn"
          type="button"
          onClick={() => setIsDemoOpen(true)}
        >
          Watch Demo
        </button>

        <a
          className="odoo-affiliate-cta odoo-affiliate-try-btn"
          href="https://www.odoo.com/r/aff-ashweb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try Odoo now <span aria-hidden="true">&rarr;</span>
        </a>
      </aside>

      <CertificatePopup
        media="/assets/Videos/OdooDemo.webm"
        mediaType="video"
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </>
  );
};

export default OdooAffiliate;
