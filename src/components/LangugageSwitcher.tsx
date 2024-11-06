import Link from 'next/link';

const LanguageSwitcher = () => {
  return (
    <div>
      <button>
        <Link href="/en">
          English
        </Link>
      </button>
      <button>
        <Link href="/zh">
          Chinese
        </Link>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
