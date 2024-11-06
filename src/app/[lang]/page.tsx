import LanguageSwitcher from "@/components/LangugageSwitcher";
import GetDictonary from "./dictionaries";

async function Home({ params }: { params: { lang: string } }) {
    // Wait for params to be resolved
    const { lang } = await params;
    const t = await GetDictonary(lang);
    
    return (
        <main>
            <LanguageSwitcher/>
            <p>
                {t.home.title}
            </p>
            {t.home.desc}
        </main>
    );
}

export default Home;
