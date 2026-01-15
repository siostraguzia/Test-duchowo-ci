
<?php
/**
 * Plugin Name: Dominikanki.pl - Test Duchowości
 * Description: Osadza interaktywny test duchowości na stronie za pomocą shortcode [dominikanki_test].
 * Version: 1.0
 * Author: Dominikanki.pl
 */

function dominikanki_test_shortcode() {
    // Zakładamy, że pliki JS/TS są dostępne w folderze wtyczki lub zewnętrznie.
    // Poniżej znajduje się czysty kod HTML/JS do wstrzyknięcia.
    
    ob_start();
    ?>
    <div id="dominikanki-app-outer-wrapper" style="all: initial;">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@400;700&display=swap');
            #dominikanki-app-root {
                font-family: 'Inter', sans-serif;
                background-color: #fdfcfb;
                color: #1c1917;
                min-height: 600px;
                position: relative;
                overflow: hidden;
            }
            #dominikanki-app-root .font-serif { font-family: 'Merriweather', serif; }
            #dominikanki-app-root .animate-fade-in {
                animation: fadeIn 0.8s ease-out forwards;
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        </style>
        <script src="https://cdn.tailwindcss.com"></script>
        <div id="dominikanki-app-root">
            <div id="root"></div>
        </div>
        
        <script type="importmap">
        {
          "imports": {
            "react": "https://esm.sh/react@^19.2.3",
            "react-dom/": "https://esm.sh/react-dom@^19.2.3/",
            "react/": "https://esm.sh/react@^19.2.3/",
            "@google/genai": "https://esm.sh/@google/genai@^1.34.0",
            "recharts": "https://esm.sh/recharts@^3.6.0"
          }
        }
        </script>
        <script type="module">
            // Tutaj WordPress wstrzykuje główną logikę modułu
            import './index.tsx';
        </script>
    </div>
    <?php
    return ob_get_clean();
}

add_shortcode('dominikanki_test', 'dominikanki_test_shortcode');
