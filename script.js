/**
 * Mitsubishi Samarinda - Sales Landing Page JavaScript
 * Dedicated for Sales Executive HASAN (0811-7464-123)
 * PT Mahakam Berlian Samjaya - Kalimantan Timur
 */

document.addEventListener('DOMContentLoaded', () => {

  // Sales Contact Information
  const SALES_NAME = "HASAN";
  const SALES_WA_NUMBER = "628117464123"; // International format for wa.me link

  // ==========================================================================
  // 1. Data Varian & Harga Resmi OTR Kaltim (PT Mahakam Berlian Samjaya)
  // ==========================================================================
  const VEHICLE_DATA = {
    pajero_sport: {
      name: "All New Pajero Sport",
      category: "SUV 7-Seater Prestisius",
      variants: [
        { name: "NEW EXCEED MT 4x2", price: 645000000, whitePrice: 648000000 },
        { name: "NEW EXCEED AT 4x2", price: 661500000, whitePrice: 664500000 },
        { name: "NEW DAKAR AT 4x2", price: 735500000, whitePrice: 742000000 },
        { name: "NEW DAKAR AT ULTIMATE 4x2", price: 787000000, whitePrice: 790000000 },
        { name: "NEW GLX MT 4x4", price: 716000000, whitePrice: 719000000 },
        { name: "NEW DAKAR ULTIMATE AT 4x4", price: 895500000, whitePrice: 898500000 }
      ]
    },
    destinator: {
      name: "Mitsubishi Destinator",
      category: "Premium Family SUV 7-Seater (1.5 Turbo CVT8)",
      variants: [
        { name: "DESTINATOR GLS", price: 424000000, whitePrice: 426500000 },
        { name: "DESTINATOR EXCEED", price: 454000000, whitePrice: 456500000 },
        { name: "DESTINATOR ULTIMATE", price: 513500000, whitePrice: 516000000 },
        { name: "DESTINATOR ULTIMATE PREMIUM", price: 543000000, whitePrice: 545500000 },
        { name: "DESTINATOR 55 ANNIVERSARY", price: 554000000, whitePrice: null }
      ]
    },
    xforce: {
      name: "Mitsubishi Xforce",
      category: "Compact SUV 5-Seater Mewah (Yamaha Premium Sound)",
      variants: [
        { name: "NEW EXCEED", price: 390500000, whitePrice: 392000000 },
        { name: "NEW ULTIMATE", price: 401500000, whitePrice: 403000000 },
        { name: "NEW ULTIMATE PREMIUM", price: 426500000, whitePrice: 428000000 },
        { name: "NEW HEV ULTIMATE (Hybrid)", price: 447500000, whitePrice: 449000000 },
        { name: "NEW HEV ULTIMATE PREMIUM (Hybrid)", price: 472500000, whitePrice: 474000000 }
      ]
    },
    xpander: {
      name: "Mitsubishi Xpander",
      category: "Rajanya MPV Keluarga 7-Seater Nyaman & Irit",
      variants: [
        { name: "GLS MT", price: 318500000, whitePrice: 320000000 },
        { name: "GLS AT", price: 329000000, whitePrice: 330500000 },
        { name: "EXCEED TOURER MT", price: 338500000, whitePrice: 340000000 },
        { name: "EXCEED TOURER AT", price: 348000000, whitePrice: 349500000 },
        { name: "ULTIMATE MT", price: 378500000, whitePrice: 380000000 },
        { name: "ULTIMATE AT", price: 394000000, whitePrice: 395500000 }
      ]
    },
    xpander_cross: {
      name: "Mitsubishi Xpander Cross",
      category: "Adventure Crossover MPV (Active Yaw Control)",
      variants: [
        { name: "XPANDER CROSS MT", price: 394500000, whitePrice: 396000000 },
        { name: "XPANDER CROSS AT PLUS", price: 419500000, whitePrice: 421000000 },
        { name: "XPANDER CROSS AT PLUS TWO TONE", price: 424500000, whitePrice: 426000000 }
      ]
    },
    triton: {
      name: "All New Triton",
      category: "Double & Single Cabin Paling Tangguh (4x2 & 4x4)",
      variants: [
        { name: "SC GLX MT (4x2)", price: 420000000, whitePrice: null },
        { name: "SC HDX MT (4x4)", price: 595500000, whitePrice: null },
        { name: "DC HDX MT (4x4)", price: 639000000, whitePrice: null },
        { name: "DC GLS MT (4x4)", price: 661000000, whitePrice: null },
        { name: "DC EXCEED MT (4x4)", price: 711000000, whitePrice: null },
        { name: "DC ULTIMATE AT (4x4)", price: 749000000, whitePrice: null }
      ]
    },
    l300: {
      name: "All New Colt L300 Euro 4",
      category: "Legenda Angkutan Niaga & Pick Up Tangguh",
      variants: [
        { name: "CHASSIS CABIN (BBN BOX)", price: 312500000, whitePrice: null },
        { name: "PICK UP FLAT BED", price: 313500000, whitePrice: null },
        { name: "BOX ALUMINIUM (Standar)", price: 369500000, whitePrice: null }
      ]
    }
  };

  // Helper: Format number to Indonesian Rupiah (Rp)
  function formatRupiah(num) {
    return 'Rp ' + Math.round(num).toLocaleString('id-ID');
  }

  // ==========================================================================
  // 2. Navigation & Mobile Drawer
  // ==========================================================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  });

  // ==========================================================================
  // 3. Catalog Filter Tabs
  // ==========================================================================
  const tabButtons = document.querySelectorAll('.catalog-tabs .tab-btn');
  const carCards = document.querySelectorAll('.cars-grid .car-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetCat = btn.getAttribute('data-category');

      carCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (targetCat === 'all' || cardCat === targetCat) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================================================
  // 4. Variant Details Modal
  // ==========================================================================
  const variantsModal = document.getElementById('variantsModal');
  const modalCarTitle = document.getElementById('modalCarTitle');
  const modalVariantsBody = document.getElementById('modalVariantsBody');
  const closeVariantsModal = document.getElementById('closeVariantsModal');
  const closeVariantsModalBottom = document.getElementById('closeVariantsModalBottom');
  const modalWaBtn = document.getElementById('modalWaBtn');
  const viewVariantsBtns = document.querySelectorAll('.view-variants-btn');

  function openVariantModalFor(modelKey) {
    const data = VEHICLE_DATA[modelKey];
    if (!data) return;

    modalCarTitle.textContent = `${data.name} - Rincian Varian`;
    
    let tableHtml = `
      <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 14px;">
        <i class="fa-solid fa-circle-info text-red"></i> 
        Harga On The Road (OTR) Kalimantan Timur • PT Mahakam Berlian Samjaya Samarinda.
      </p>
      <div style="overflow-x: auto;">
        <table class="variant-table">
          <thead>
            <tr>
              <th>Varian Model</th>
              <th style="text-align: right;">Harga OTR (Standar)</th>
              <th style="text-align: right;">Harga OTR (Warna Putih)</th>
            </tr>
          </thead>
          <tbody>
    `;

    data.variants.forEach(v => {
      tableHtml += `
        <tr>
          <td>
            <span class="variant-name">${v.name}</span>
          </td>
          <td class="variant-price">${formatRupiah(v.price)}</td>
          <td class="variant-price" style="color: #475569;">
            ${v.whitePrice ? formatRupiah(v.whitePrice) : '-'}
          </td>
        </tr>
      `;
    });

    tableHtml += `
          </tbody>
        </table>
      </div>
      <div style="margin-top: 18px; padding: 12px 16px; background: #f8fafc; border-radius: 8px; font-size: 0.78rem; color: #64748b; line-height: 1.5;">
        <strong>Perhatian Pengiriman Wilayah Kaltim:</strong><br>
        • Tenggarong, Bontang & Sangatta: Tambahan Rp 3.000.000<br>
        • Penajam, Petung, Grogot: Tambahan Rp 2.500.000<br>
        • Melak: Tambahan Rp 4.000.000 • Berau: Tambahan Rp 5.000.000<br>
        <em>*Notice BBN tidak mengikat dan belum termasuk keur & pajak progresif.</em>
      </div>
    `;

    modalVariantsBody.innerHTML = tableHtml;

    // Update WhatsApp link for this specific model
    const waText = encodeURIComponent(`Halo Mas Hasan, saya tertarik dengan informasi varian & promo kredit ${data.name} di Samarinda. Mohon info paket DP & diskonnya.`);
    modalWaBtn.href = `https://wa.me/${SALES_WA_NUMBER}?text=${waText}`;

    variantsModal.classList.add('open');
    variantsModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  viewVariantsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modelKey = btn.getAttribute('data-model');
      openVariantModalFor(modelKey);
    });
  });

  function closeVariantModal() {
    variantsModal.classList.remove('open');
    variantsModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeVariantsModal) closeVariantsModal.addEventListener('click', closeVariantModal);
  if (closeVariantsModalBottom) closeVariantsModalBottom.addEventListener('click', closeVariantModal);

  // Close modal when clicking backdrop outside dialog
  if (variantsModal) {
    variantsModal.addEventListener('click', (e) => {
      if (e.target === variantsModal) closeVariantModal();
    });
  }

  // ==========================================================================
  // 5. Dealer Price Sheet Modal
  // ==========================================================================
  const openPricelistModal = document.getElementById('openPricelistModal');
  const sheetModal = document.getElementById('sheetModal');
  const closeSheetModal = document.getElementById('closeSheetModal');

  if (openPricelistModal && sheetModal) {
    openPricelistModal.addEventListener('click', () => {
      sheetModal.classList.add('open');
      sheetModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeSheetModal && sheetModal) {
    closeSheetModal.addEventListener('click', () => {
      sheetModal.classList.remove('open');
      sheetModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });

    sheetModal.addEventListener('click', (e) => {
      if (e.target === sheetModal) {
        sheetModal.classList.remove('open');
        sheetModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  // ==========================================================================
  // 6. Interactive Loan Calculator (Simulasi Cicilan Sederhana)
  // ==========================================================================
  const carModelSelect = document.getElementById('carModelSelect');
  const customPriceGroup = document.getElementById('customPriceGroup');
  const customPriceInput = document.getElementById('customPriceInput');
  const dpPercentRange = document.getElementById('dpPercentRange');
  const dpPercentBadge = document.getElementById('dpPercentBadge');
  const tenorButtons = document.querySelectorAll('#tenorButtons .tenor-btn');

  const selectedCarNameDisplay = document.getElementById('selectedCarNameDisplay');
  const monthlyInstallmentDisplay = document.getElementById('monthlyInstallmentDisplay');
  const tenorSummaryDisplay = document.getElementById('tenorSummaryDisplay');
  const otrPriceDisplay = document.getElementById('otrPriceDisplay');
  const dpAmountDisplay = document.getElementById('dpAmountDisplay');
  const principalLoanDisplay = document.getElementById('principalLoanDisplay');
  const sendSimulationToWaBtn = document.getElementById('sendSimulationToWaBtn');

  let currentTenorMonths = 60;
  let currentTenorYears = 5;

  // Suku bunga estimasi flat p.a. per tenor (standard leasing automotive)
  const INTEREST_RATES = {
    12: 0.028, // 1 tahun: 2.8% p.a.
    24: 0.034, // 2 tahun: 3.4% p.a.
    36: 0.039, // 3 tahun: 3.9% p.a.
    48: 0.044, // 4 tahun: 4.4% p.a.
    60: 0.048, // 5 tahun: 4.8% p.a.
    72: 0.054  // 6 tahun: 5.4% p.a.
  };

  function calculateInstallment() {
    let otrPrice = 0;
    let carName = "Mobil Mitsubishi";

    if (carModelSelect.value === 'custom') {
      otrPrice = parseFloat(customPriceInput.value) || 0;
      carName = "Mobil Pilihan Anda (Custom OTR)";
    } else {
      otrPrice = parseFloat(carModelSelect.value) || 0;
      const selectedOption = carModelSelect.options[carModelSelect.selectedIndex];
      carName = selectedOption.getAttribute('data-name') || selectedOption.text;
    }

    const dpPercent = parseInt(dpPercentRange.value, 10);
    dpPercentBadge.textContent = `${dpPercent}%`;

    const dpAmount = otrPrice * (dpPercent / 100);
    const principalLoan = Math.max(0, otrPrice - dpAmount);

    const annualRate = INTEREST_RATES[currentTenorMonths] || 0.048;
    const totalInterest = principalLoan * annualRate * currentTenorYears;
    const totalLoanWithInterest = principalLoan + totalInterest;
    const monthlyInstallment = currentTenorMonths > 0 ? (totalLoanWithInterest / currentTenorMonths) : 0;

    // Update DOM Display
    selectedCarNameDisplay.textContent = carName;
    otrPriceDisplay.textContent = formatRupiah(otrPrice);
    dpAmountDisplay.textContent = `${formatRupiah(dpAmount)} (${dpPercent}%)`;
    principalLoanDisplay.textContent = formatRupiah(principalLoan);
    monthlyInstallmentDisplay.textContent = formatRupiah(monthlyInstallment);
    tenorSummaryDisplay.textContent = `Tenor: ${currentTenorYears} Tahun (${currentTenorMonths} Bulan)`;

    // Update WhatsApp Button Click Handler
    sendSimulationToWaBtn.onclick = () => {
      const waMsg = 
`Halo Mas Hasan, saya tertarik simulasi kredit Mitsubishi via website:
- *Model Mobil:* ${carName}
- *Harga OTR:* ${formatRupiah(otrPrice)}
- *Uang Muka (DP):* ${formatRupiah(dpAmount)} (${dpPercent}%)
- *Jangka Waktu:* ${currentTenorYears} Tahun (${currentTenorMonths} Bulan)
- *Estimasi Angsuran:* ${formatRupiah(monthlyInstallment)} / bulan

Mohon info promo diskon maksimal, paket asuransi, dan persyaratan pengajuan berkasnya ya Mas Hasan. Terima kasih.`;

      const waUrl = `https://wa.me/${SALES_WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;
      window.open(waUrl, '_blank');
    };
  }

  // Event Listeners for Calculator
  if (carModelSelect) {
    carModelSelect.addEventListener('change', () => {
      if (carModelSelect.value === 'custom') {
        customPriceGroup.style.display = 'flex';
      } else {
        customPriceGroup.style.display = 'none';
      }
      calculateInstallment();
    });
  }

  if (customPriceInput) {
    customPriceInput.addEventListener('input', calculateInstallment);
  }

  if (dpPercentRange) {
    dpPercentRange.addEventListener('input', calculateInstallment);
  }

  tenorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tenorButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTenorMonths = parseInt(btn.getAttribute('data-tenor'), 10);
      currentTenorYears = parseInt(btn.getAttribute('data-years'), 10);
      calculateInstallment();
    });
  });

  // Initial calculation trigger
  calculateInstallment();

  // ==========================================================================
  // 7. Contact Consultation Form to WhatsApp
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const city = document.getElementById('clientCity').value.trim();
      const car = document.getElementById('clientCar').value;
      const plan = document.getElementById('clientPlan').value;
      const note = document.getElementById('clientNote').value.trim();

      const waMessage = 
`Halo Mas Hasan, saya ingin konsultasi pembelian mobil Mitsubishi:
- *Nama:* ${name}
- *Kota / Domisili:* ${city}
- *Mobil yang Diminati:* ${car}
- *Rencana Pembelian:* ${plan}
${note ? `- *Catatan:* ${note}` : ''}

Mohon bantu informasi harga OTR Kaltim, promo diskon, dan ketersediaan unitnya ya Mas Hasan.`;

      const targetUrl = `https://wa.me/${SALES_WA_NUMBER}?text=${encodeURIComponent(waMessage)}`;
      window.open(targetUrl, '_blank');
    });
  }

  // ==========================================================================
  // 8. FAQ Accordion
  // ==========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // Keydown Escape to close open modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (variantsModal && variantsModal.classList.contains('open')) closeVariantModal();
      if (sheetModal && sheetModal.classList.contains('open')) {
        sheetModal.classList.remove('open');
        sheetModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }
  });

});
