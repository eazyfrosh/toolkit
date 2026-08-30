'use client';
import { useRef, useState } from 'react';
import {
  Archive,
  ChevronDown,
  CircleCheck,
  CreditCard,
  Download,
  FileImage,
  FileText,
  History,
  LayoutDashboard,
  LogOut,
  Menu,
  Moon,
  Plus,
  ReceiptText,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  X,
} from 'lucide-react';
type View = 'dashboard' | 'templates' | 'editor' | 'history' | 'admin';
type Template = {
  id: string;
  name: string;
  category: string;
  accent: string;
  description: string;
};
const templates: Template[] = [
  {
    id: 'studio',
    name: 'Studio',
    category: 'Retail',
    accent: '#665cf6',
    description: 'Clean and editorial',
  },
  {
    id: 'mono',
    name: 'Mono',
    category: 'Minimal',
    accent: '#111827',
    description: 'Classic thermal style',
  },
  {
    id: 'citrus',
    name: 'Citrus',
    category: 'Crypto',
    accent: '#2584a8',
    description: 'Transfer detail',
  },
  {
    id: 'orbit',
    name: 'Orbit',
    category: 'Services',
    accent: '#0ea5e9',
    description: 'Modern invoice look',
  },
];
const historyRows = [
  {
    id: 'SMP-1048',
    title: 'Northstar demo',
    template: 'Studio',
    amount: '$148.20',
    date: 'Aug 30, 2026',
    status: 'Exported',
  },
  {
    id: 'SMP-1047',
    title: 'Sunday market sample',
    template: 'Citrus',
    amount: '$42.80',
    date: 'Aug 29, 2026',
    status: 'Draft',
  },
  {
    id: 'SMP-1046',
    title: 'Workspace concept',
    template: 'Mono',
    amount: '$280.00',
    date: 'Aug 27, 2026',
    status: 'Exported',
  },
];
export default function Home() {
  const [signedIn, setSignedIn] = useState(false),
    [register, setRegister] = useState(false),
    [view, setView] = useState<View>('dashboard'),
    [dark, setDark] = useState(false),
    [mobile, setMobile] = useState(false),
    [template, setTemplate] = useState(templates[0]),
    [query, setQuery] = useState(''),
    [toast, setToast] = useState('');
  const [form, setForm] = useState({
    merchant: 'Wright',
    item: '$Payday1080',
    amount: '80.00',
    tax: '0.00',
    date: 'Today at 9:17 PM',
    note: 'Thanks for trying ReceiptLab.',
    monoMessage: "You've sent",
    monoCurrency: 'USD',
    monoRecipient: 'lcantrell44@hotmail.com',
    citrusAmount: '-50000',
    citrusAsset: 'BTC',
    citrusFiat: '≈ $5,417,300,000.00',
    citrusDate: 'Today at 2:10 PM',
    citrusStatus: 'Completed',
    citrusRecipient: 'bc1qplf...7qrp2v',
    citrusFee: '600 BTC ($65020200.00)',
  });
  const ref = useRef<HTMLDivElement>(null),
    total = (Number(form.amount || 0) + Number(form.tax || 0)).toFixed(2);
  function go(v: View) {
    setView(v);
    setMobile(false);
  }
  function notify(s: string) {
    setToast(s);
    setTimeout(() => setToast(''), 2400);
  }
  async function exportFile(type: 'png' | 'pdf') {
    notify(`Preparing ${type.toUpperCase()}…`);
    const c = document.createElement('canvas');
    c.width = 900;
    c.height = template.id === 'mono' ? 1310 : template.id === 'citrus' ? 1600 : 1200;
    const x = c.getContext('2d');
    if (!x) return;
    if (template.id === 'studio') {
      const img = new Image();
      img.src = '/studio-reference.jpg';
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
      x.fillStyle = '#14181b';
      x.fillRect(0, 0, 900, 1200);
      x.save();
      x.beginPath();
      x.arc(450, 83, 55, 0, Math.PI * 2);
      x.clip();
      x.drawImage(img, 0, 0, 900, 1200);
      x.restore();
      x.fillStyle = '#00d95f';
      x.beginPath();
      x.roundRect(48, 928, 804, 78, 39);
      x.fill();
      x.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      x.lineWidth = 2;
      x.stroke();
      x.fillStyle = '#fff';
      x.font = 'bold 33px Arial';
      x.textAlign = 'center';
      x.fillText('✓  Completed', 450, 978);
      x.textAlign = 'center';
      x.fillStyle = '#fff';
      x.font = 'bold 34px Arial';
      x.fillText(form.merchant || 'Demo name', 450, 180);
      x.fillStyle = '#aeb0b4';
      x.font = '30px Arial';
      x.fillText(`Payment to ${form.item || '$SampleUser'}`, 450, 222);
      x.fillStyle = '#fff';
      x.font = 'bold 86px Arial';
      x.fillText(`$${Number(form.amount || 0).toFixed(2)}`, 450, 565);
      x.fillStyle = '#aeb0b4';
      x.font = '30px Arial';
      x.fillText(form.date || 'Demo date', 450, 638);
      x.save();
      x.translate(450, 610);
      x.rotate(-0.28);
      x.globalAlpha = 0.76;
      x.fillStyle = '#ff2438';
      x.font = 'bold 82px Arial';
      x.fillText('SAMPLE ONLY', 0, 0);
      x.restore();
    } else if (template.id === 'mono') {
      const img = new Image();
      img.src = '/mono-reference.jpg';
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
      x.drawImage(img, 0, 0, 900, 1310);
      x.fillStyle = '#fff';
      x.fillRect(2, 260, 896, 586);
      x.strokeStyle = '#e8e8e8';
      x.lineWidth = 2;
      x.strokeRect(2, 260, 896, 586);
      x.textAlign = 'center';
      x.fillStyle = '#353535';
      x.font = '58px Arial';
      x.fillText(form.monoMessage || "You've sent", 450, 468);
      x.fillText(
        `$${Number(form.amount || 0).toFixed(2)} ${form.monoCurrency || 'USD'} to`,
        450,
        566,
      );
      const recipient = form.monoRecipient || 'sample@example.com';
      x.font = '58px Arial';
      if (x.measureText(recipient).width <= 790) {
        x.fillText(recipient, 450, 674);
      } else {
        let split = recipient.length;
        while (split > 1 && x.measureText(recipient.slice(0, split)).width > 790) {
          split -= 1;
        }
        x.fillText(recipient.slice(0, split), 450, 652);
        x.fillText(recipient.slice(split), 450, 732);
      }
      x.save();
      x.translate(450, 624);
      x.rotate(-0.28);
      x.globalAlpha = 0.78;
      x.fillStyle = '#ff263a';
      x.font = 'bold 78px Arial';
      x.fillText('SAMPLE ONLY', 0, 0);
      x.restore();
    } else if (template.id === 'citrus') {
      const img = new Image();
      img.src = '/citrus-reference.jpg';
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
      x.drawImage(img, 0, 0, 900, 1600);
      x.textAlign = 'center';
      x.fillStyle = '#fff';
      x.fillRect(150, 270, 600, 165);
      x.fillStyle = '#292929';
      x.font = 'bold 48px Arial';
      x.fillText(
        `${form.citrusAmount || '-50000'} ${form.citrusAsset || 'BTC'}`,
        450,
        350,
      );
      x.fillStyle = '#696969';
      x.font = '30px Arial';
      x.fillText(form.citrusFiat || '≈ $0.00', 450, 400);
      x.fillStyle = '#fafafa';
      x.fillRect(405, 458, 445, 280);
      x.fillRect(340, 778, 510, 92);
      x.textAlign = 'right';
      x.fillStyle = '#4e4e4e';
      x.font = '31px Arial';
      x.fillText(form.citrusDate || 'Demo date', 830, 508);
      x.fillText(form.citrusStatus || 'Completed', 830, 607);
      x.fillText(form.citrusRecipient || 'sample-address', 830, 705);
      x.font = '29px Arial';
      x.fillText(form.citrusFee || '0 BTC ($0.00)', 830, 838);
      x.save();
      x.translate(450, 640);
      x.rotate(-0.28);
      x.globalAlpha = 0.78;
      x.fillStyle = '#ff263a';
      x.textAlign = 'center';
      x.font = 'bold 82px Arial';
      x.fillText('SAMPLE ONLY', 0, 0);
      x.restore();
    } else {
      x.fillStyle = '#fff';
      x.fillRect(0, 0, 900, 1200);
      x.fillStyle = template.accent;
      x.fillRect(0, 0, 900, 18);
      x.textAlign = 'center';
      x.fillStyle = '#111827';
      x.font = 'bold 36px Arial';
      x.fillText(form.merchant || 'Demo merchant', 450, 105);
      x.fillStyle = '#c52233';
      x.font = 'bold 25px Arial';
      x.fillText('DEMO / SAMPLE / NOT A REAL TRANSACTION', 450, 165);
      x.textAlign = 'left';
      x.fillStyle = '#6b7280';
      x.font = '22px Arial';
      x.fillText(form.date, 75, 250);
      x.fillStyle = '#111827';
      x.fillText(form.item, 75, 365);
      x.textAlign = 'right';
      x.fillText(`$${Number(form.amount || 0).toFixed(2)}`, 825, 365);
      x.textAlign = 'left';
      x.font = 'bold 34px Arial';
      x.fillText('Total', 75, 520);
      x.textAlign = 'right';
      x.fillText(`$${total}`, 825, 520);
      x.save();
      x.translate(450, 850);
      x.rotate(-0.3);
      x.globalAlpha = 0.13;
      x.fillStyle = '#c52233';
      x.font = 'bold 75px Arial';
      x.fillText('SAMPLE ONLY', 0, 0);
      x.restore();
    }
    const url = c.toDataURL();
    if (type === 'png') {
      const a = document.createElement('a');
      a.download = 'receiptlab-demo-sample.png';
      a.href = url;
      a.click();
    } else {
      const w = window.open();
      w?.document.write(
        `<title>ReceiptLab sample</title><img src="${url}" style="max-width:100%"><script>print()<\/script>`,
      );
    }
    notify(`${type.toUpperCase()} sample ready`);
  }
  if (!signedIn)
    return (
      <Auth
        register={register}
        dark={dark}
        theme={() => setDark(!dark)}
        mode={() => setRegister(!register)}
        submit={() => setSignedIn(true)}
      />
    );
  const nav = [
    ['dashboard', 'Overview', LayoutDashboard],
    ['templates', 'Templates', Sparkles],
    ['editor', 'Receipt editor', ReceiptText],
    ['history', 'History', History],
    ['admin', 'Admin', ShieldCheck],
  ] as const;
  return (
    <div className={dark ? 'dark' : ''}>
      <div className="shell">
        <aside className={`sidebar ${mobile ? 'open' : ''}`}>
          <div className="brand">
            <i>
              <ReceiptText />
            </i>
            <span>
              ReceiptLab<small>DEMO STUDIO</small>
            </span>
            <button className="close" onClick={() => setMobile(false)}>
              <X />
            </button>
          </div>
          <nav>
            {nav.map(([id, label, I]) => (
              <button
                className={view === id ? 'active' : ''}
                onClick={() => go(id)}
                key={id}
              >
                <I />
                {label}
              </button>
            ))}
          </nav>
          <div className="safe">
            <ShieldCheck />
            <b>Demo-safe by design</b>
            <p>Every preview and export includes a permanent sample notice.</p>
          </div>
          <div className="profile">
            <i>AD</i>
            <span>
              <b>Alex Demo</b>
              <small>Creator plan</small>
            </span>
            <LogOut onClick={() => setSignedIn(false)} />
          </div>
        </aside>
        <main>
          <header>
            <button className="menu" onClick={() => setMobile(true)}>
              <Menu />
            </button>
            <div className="crumb">
              <small>Workspace</small>
              <b>
                {view === 'editor'
                  ? 'Receipt editor'
                  : view[0].toUpperCase() + view.slice(1)}
              </b>
            </div>
            <div className="actions">
              <button className="icon" onClick={() => setDark(!dark)}>
                {dark ? <Sun /> : <Moon />}
              </button>
              <button className="primary" onClick={() => go('editor')}>
                <Plus />
                New receipt
              </button>
            </div>
          </header>
          {view === 'dashboard' && <Dashboard go={go} />}{' '}
          {view === 'templates' && (
            <Gallery
              selected={template}
              choose={(t) => {
                setTemplate(t);
                go('editor');
              }}
            />
          )}
          {view === 'editor' && (
            <Editor
              form={form}
              setForm={setForm}
              template={template}
              setTemplate={setTemplate}
              total={total}
              receiptRef={ref}
              exp={exportFile}
              save={() => notify('Demo receipt saved')}
            />
          )}{' '}
          {view === 'history' && (
            <HistoryPage
              query={query}
              setQuery={setQuery}
              rows={historyRows.filter((r) =>
                (r.title + r.id + r.template)
                  .toLowerCase()
                  .includes(query.toLowerCase()),
              )}
              edit={() => go('editor')}
            />
          )}{' '}
          {view === 'admin' && <Admin notify={notify} />}
        </main>
        {mobile && (
          <button className="scrim" onClick={() => setMobile(false)} />
        )}{' '}
        {toast && (
          <div className="toast">
            <ShieldCheck />
            {toast}
          </div>
        )}
      </div>
    </div>
  );
}
function Auth({
  register,
  dark,
  theme,
  mode,
  submit,
}: {
  register: boolean;
  dark: boolean;
  theme: () => void;
  mode: () => void;
  submit: () => void;
}) {
  return (
    <div className={dark ? 'dark' : ''}>
      <div className="auth">
        <section className="auth-art">
          <div className="logo">
            <ReceiptText />
            ReceiptLab
          </div>
          <div className="pitch">
            <span>DESIGN RESPONSIBLY</span>
            <h1>
              Beautiful receipt concepts.
              <br />
              <em>Clearly fictional.</em>
            </h1>
            <p>
              Create polished demo receipts for mockups, product demos, and
              creative presentations—never for real transactions.
            </p>
            <div>
              <ShieldCheck />
              <b>
                Permanent safety marking
                <small>
                  Every output says DEMO / SAMPLE / NOT A REAL TRANSACTION.
                </small>
              </b>
            </div>
          </div>
        </section>
        <section className="auth-panel">
          <button className="theme" onClick={theme}>
            {dark ? <Sun /> : <Moon />}
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <i>
              <CreditCard />
            </i>
            <span className="eyebrow">CREATOR DASHBOARD</span>
            <h2>{register ? 'Create your account' : 'Welcome back'}</h2>
            <p>
              {register ? 'Already a member?' : 'New to ReceiptLab?'}{' '}
              <button type="button" onClick={mode}>
                {register ? 'Sign in' : 'Create an account'}
              </button>
            </p>
            {register && (
              <label>
                Full name
                <input required placeholder="Alex Morgan" />
              </label>
            )}
            <label>
              Email address
              <input type="email" required placeholder="alex@example.com" />
            </label>
            <label>
              Password
              <input
                type="password"
                minLength={6}
                required
                placeholder="At least 6 characters"
              />
            </label>
            <div className="auth-row">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <button type="button">Forgot password?</button>
            </div>
            <button className="primary submit">
              {register ? 'Create demo account' : 'Sign in to dashboard'}
            </button>
            <aside>
              <ShieldCheck />
              Demo content only. No real financial records.
            </aside>
          </form>
          <footer>© 2026 ReceiptLab · Sample studio</footer>
        </section>
      </div>
    </div>
  );
}
function Dashboard({ go }: { go: (v: View) => void }) {
  return (
    <div className="content">
      <section className="welcome">
        <div>
          <span className="eyebrow">SATURDAY, AUGUST 30</span>
          <h1>Good morning, Alex.</h1>
          <p>
            Your demo studio is ready. Create something unmistakably fictional.
          </p>
        </div>
        <button className="primary" onClick={() => go('editor')}>
          <Plus />
          Create a sample
        </button>
      </section>
      <div className="stats">
        <Stat
          icon={<ReceiptText />}
          label="Demo receipts"
          value="24"
          detail="+12% this month"
        />
        <Stat
          icon={<Download />}
          label="Exports"
          value="18"
          detail="PNG & PDF"
        />
        <Stat
          icon={<Sparkles />}
          label="Templates"
          value="4"
          detail="All available"
        />
      </div>
      <section className="panel">
        <Title title="Start creating" text="Choose a workflow to begin." />
        <div className="quick">
          <Quick
            icon={<Plus />}
            title="New receipt"
            text="Start with your last template"
            click={() => go('editor')}
          />
          <Quick
            icon={<Sparkles />}
            title="Browse templates"
            text="Explore four demo-safe looks"
            click={() => go('templates')}
          />
          <Quick
            icon={<Archive />}
            title="Import draft"
            text="Continue a saved concept"
          />
        </div>
      </section>
      <section className="panel">
        <Title
          title="Recent samples"
          text="Your latest fictional receipt concepts."
        />
        <Table rows={historyRows.slice(0, 2)} />
      </section>
    </div>
  );
}
function Stat({
  icon,
  label,
  value,
  detail,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="stat">
      <i>{icon}</i>
      <span>
        <small>{label}</small>
        <b>{value}</b>
        <em>{detail}</em>
      </span>
    </div>
  );
}
function Title({ title, text }: { title: string; text: string }) {
  return (
    <div className="panel-title">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
function Quick({
  icon,
  title,
  text,
  click,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  click?: () => void;
}) {
  return (
    <button onClick={click}>
      <i>{icon}</i>
      <b>{title}</b>
      <small>{text}</small>
    </button>
  );
}
function Gallery({
  selected,
  choose,
}: {
  selected: Template;
  choose: (t: Template) => void;
}) {
  return (
    <div className="content">
      <PageTitle
        over="TEMPLATE LIBRARY"
        title="Choose your starting point"
        text="Original layouts for mockups, prototypes, and presentations."
      />
      <div className="gallery">
        {templates.map((t) => (
          <button
            className={selected.id === t.id ? 'selected' : ''}
            onClick={() => choose(t)}
            key={t.id}
          >
            <div
              className={`mini mini-${t.id}`}
              style={{ '--accent': t.accent } as React.CSSProperties}
            >
              {t.id === 'studio' || t.id === 'mono' || t.id === 'citrus' ? (
                <>
                  <img
                    src={
                      t.id === 'studio'
                        ? '/studio-reference.jpg'
                        : t.id === 'mono'
                          ? '/mono-reference.jpg'
                          : '/citrus-reference.jpg'
                    }
                    alt={`${t.name} receipt reference`}
                  />
                  <span className="image-watermark">SAMPLE ONLY</span>
                </>
              ) : (
                <>
                  <b>DEMO CO.</b>
                  <strong>DEMO / SAMPLE</strong>
                  <i />
                  <i />
                  <i />
                  <em>$128.50</em>
                  <small>NOT A REAL TRANSACTION</small>
                </>
              )}
            </div>
            <footer>
              <span>
                <b>{t.name}</b>
                <small>{t.description}</small>
              </span>
              <em>{t.category}</em>
            </footer>
          </button>
        ))}
      </div>
    </div>
  );
}
function Editor({
  form,
  setForm,
  template,
  setTemplate,
  total,
  receiptRef,
  exp,
  save,
}: any) {
  const field = (k: string, l: string) => (
    <label>
      {l}
      <input
        value={form[k]}
        onChange={(e) => setForm({ ...form, [k]: e.target.value })}
      />
    </label>
  );
  return (
    <div className="editor">
      <div className="editor-head">
        <div>
          <span className="eyebrow">LIVE EDITOR</span>
          <h1>Design your sample</h1>
        </div>
        <div>
          <button className="secondary" onClick={save}>
            Save draft
          </button>
          <button className="primary" onClick={() => exp('png')}>
            <Download />
            Export PNG
          </button>
        </div>
      </div>
      <div className="editor-grid">
        <section className="panel form">
          <div className="notice">
            <ShieldCheck />
            <span>
              <b>Safety notice is locked</b>
              <p>The demo warning cannot be removed.</p>
            </span>
          </div>
          <label>
            Template
            <select
              value={template.id}
              onChange={(e) =>
                setTemplate(templates.find((t) => t.id === e.target.value))
              }
            >
              {templates.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </label>
          {template.id === 'studio' ? (
            <>
              {field('merchant', 'Recipient name')}
              {field('item', 'Payment handle')}
              <div className="row">
                {field('amount', 'Amount')}
                {field('date', 'Date and time')}
              </div>
            </>
          ) : template.id === 'mono' ? (
            <>
              {field('monoMessage', 'Message')}
              {field('monoRecipient', 'Recipient email')}
              <div className="row">
                {field('amount', 'Amount')}
                {field('monoCurrency', 'Currency')}
              </div>
            </>
          ) : template.id === 'citrus' ? (
            <>
              <div className="row">
                {field('citrusAmount', 'Crypto amount')}
                {field('citrusAsset', 'Asset')}
              </div>
              {field('citrusFiat', 'Fiat equivalent')}
              <div className="row">
                {field('citrusDate', 'Date and time')}
                {field('citrusStatus', 'Status')}
              </div>
              {field('citrusRecipient', 'Recipient')}
              {field('citrusFee', 'Network fee')}
            </>
          ) : (
            <>
              {field('merchant', 'Display name')}
              {field('date', 'Demo date')}
              <div className="row">
                {field('item', 'Item or service')}
                {field('amount', 'Demo amount')}
              </div>
              {field('tax', 'Demo tax')}
              {field('note', 'Footer note')}
            </>
          )}
          <div className="exports">
            <button onClick={() => exp('png')}>
              <FileImage />
              Download PNG
            </button>
            <button onClick={() => exp('pdf')}>
              <FileText />
              Print / save PDF
            </button>
          </div>
        </section>
        <section className="stage">
          <div className="stage-label">
            <span>Live preview</span>
            <span>100%</span>
          </div>
          <div
            ref={receiptRef}
            className={`receipt ${template.id}`}
            style={{ '--accent': template.accent } as React.CSSProperties}
          >
            {template.id === 'studio' ? (
              <>
                <img
                  className="studio-fragment studio-avatar"
                  src="/studio-reference.jpg"
                  alt="Studio receipt avatar"
                />
                <div className="studio-completed" aria-label="Completed">
                  <span aria-hidden="true">✓</span>
                  <strong>Completed</strong>
                </div>
                <div className="studio-copy studio-name">
                  {form.merchant || 'Demo name'}
                </div>
                <div className="studio-copy studio-handle">
                  Payment to {form.item || '$SampleUser'}
                </div>
                <div className="studio-copy studio-amount">
                  ${Number(form.amount || 0).toFixed(2)}
                </div>
                <div className="studio-copy studio-date">
                  {form.date || 'Demo date'}
                </div>
                <div className="watermark image-watermark">SAMPLE ONLY</div>
              </>
            ) : template.id === 'mono' ? (
              <>
                <img
                  className="mono-reference"
                  src="/mono-reference.jpg"
                  alt="Mono receipt reference"
                />
                <div className="mono-message">
                  <span>{form.monoMessage || "You've sent"}</span>
                  <span>
                    ${Number(form.amount || 0).toFixed(2)}{' '}
                    {form.monoCurrency || 'USD'} to
                  </span>
                  <span className="mono-recipient">
                    {form.monoRecipient || 'sample@example.com'}
                  </span>
                </div>
                <div className="watermark mono-watermark">SAMPLE ONLY</div>
              </>
            ) : template.id === 'citrus' ? (
              <>
                <img
                  className="citrus-reference"
                  src="/citrus-reference.jpg"
                  alt="Citrus transfer reference"
                />
                <div className="citrus-top-value">
                  <strong>
                    {form.citrusAmount || '-50000'} {form.citrusAsset || 'BTC'}
                  </strong>
                  <span>{form.citrusFiat || '≈ $0.00'}</span>
                </div>
                <span className="citrus-value citrus-date">
                  {form.citrusDate || 'Demo date'}
                </span>
                <span className="citrus-value citrus-status">
                  {form.citrusStatus || 'Completed'}
                </span>
                <span className="citrus-value citrus-recipient">
                  {form.citrusRecipient || 'sample-address'}
                </span>
                <span className="citrus-value citrus-fee">
                  {form.citrusFee || '0 BTC ($0.00)'}
                </span>
                <div className="watermark citrus-watermark">SAMPLE ONLY</div>
              </>
            ) : (
              <>
                <i className="bar" />
                <div className="r-head">
                  <i>{form.merchant?.[0] || 'D'}</i>
                  <h2>{form.merchant || 'Demo merchant'}</h2>
                  <p>Creative sample receipt</p>
                </div>
                <div className="stamp">
                  DEMO / SAMPLE / NOT A REAL TRANSACTION
                </div>
                <div className="meta">
                  <span>
                    Sample no.<b>SMP-1049</b>
                  </span>
                  <span>
                    Date<b>{form.date}</b>
                  </span>
                </div>
                <div className="line">
                  <span>
                    {form.item}
                    <small>Demo item</small>
                  </span>
                  <b>${Number(form.amount || 0).toFixed(2)}</b>
                </div>
                <div className="tax">
                  <span>Demo tax</span>
                  <b>${Number(form.tax || 0).toFixed(2)}</b>
                </div>
                <div className="total">
                  <span>Total</span>
                  <b>${total}</b>
                </div>
                <p className="note">{form.note}</p>
                <footer>
                  <ShieldCheck /> This document is a visual sample only.
                  <br />
                  It does not represent a purchase, payment, or transaction.
                </footer>
                <div className="watermark">SAMPLE ONLY</div>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
function HistoryPage({ query, setQuery, rows, edit }: any) {
  return (
    <div className="content">
      <PageTitle
        over="YOUR LIBRARY"
        title="Generated receipt history"
        text="Find and reuse your fictional receipt concepts."
      />
      <section className="panel">
        <div className="search">
          <Search />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search samples, IDs, or templates…"
          />
          <button>
            <ChevronDown />
            All templates
          </button>
        </div>
        {rows.length ? (
          <Table rows={rows} edit={edit} />
        ) : (
          <div className="empty">
            <Search />
            <h3>No samples found</h3>
            <p>Try a different search term.</p>
          </div>
        )}
      </section>
    </div>
  );
}
function Table({ rows, edit }: { rows: any[]; edit?: () => void }) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Sample</th>
            <th>Template</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td>
                <i>
                  <ReceiptText />
                </i>
                <span>
                  <b>{r.title}</b>
                  <small>{r.id}</small>
                </span>
              </td>
              <td>{r.template}</td>
              <td>{r.amount}</td>
              <td>{r.date}</td>
              <td>
                <em className={r.status.toLowerCase()}>{r.status}</em>
              </td>
              <td>
                <button onClick={edit}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Admin({ notify }: { notify: (s: string) => void }) {
  return (
    <div className="content">
      <div className="admin-head">
        <PageTitle
          over="ADMIN CONSOLE"
          title="Workspace control"
          text="Manage people, templates, and safety compliance."
        />
        <span>
          <ShieldCheck />
          Administrator
        </span>
      </div>
      <div className="stats">
        <Stat
          icon={<Users />}
          label="Active users"
          value="1,284"
          detail="+64 this month"
        />
        <Stat
          icon={<ReceiptText />}
          label="Samples created"
          value="8,492"
          detail="All demo-marked"
        />
        <Stat
          icon={<ShieldCheck />}
          label="Safety coverage"
          value="100%"
          detail="No overrides"
        />
      </div>
      <section className="panel">
        <div className="admin-title">
          <Title
            title="Template management"
            text="Published layouts available to creators."
          />
          <button
            className="primary"
            onClick={() => notify('Template creator opened')}
          >
            <Plus />
            Add template
          </button>
        </div>
        <div className="admin-list">
          {templates.map((t) => (
            <div key={t.id}>
              <i style={{ background: t.accent }} />
              <span>
                <b>{t.name}</b>
                <small>{t.category} · Published</small>
              </span>
              <em>Published</em>
              <button onClick={() => notify(`${t.name} settings opened`)}>
                <Settings />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
function PageTitle({
  over,
  title,
  text,
}: {
  over: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-title">
      <span className="eyebrow">{over}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
