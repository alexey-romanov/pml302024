import React from 'react';
import { createRoot } from 'react-dom/client';
import { MessagePanel } from './MessagePanel';

async function onLoad() {
    const rootElement = document.getElementById('root');

    const url1 =
        'https://raw.githubusercontent.com/ProjectSakura/OTA/10/changelog/changelog_beryllium.txt';
    const response = await fetch(url1);
    const data: string = await response.text();
    console.log(data);
    if (rootElement) {
        const root = createRoot(rootElement);
        root.render(<MessagePanel text={data} />);
    }
}

window.onload = onLoad;
