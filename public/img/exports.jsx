const importImages = () => {
    let imageNames = [];
    for (let i = 1; i <= 30; i++) {
        imageNames.push(`IMG-${i}.jpg`);
    }
    return imageNames;
}

export const imageNames = importImages();


const importVids = () => {
    let vidsNames = [];
    for (let i = 1; i <= 7; i++) {
        vidsNames.push(`VID-${i}.mp4`);
    }
    return vidsNames;
}

export const vidsNames = importVids();
