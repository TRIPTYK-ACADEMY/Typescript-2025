type Album = {
    userId: number,
    id: number,
    title: string
}

type Photo = {
    "albumId": number,
    "id": number,
    "title": string,
    "url": string,
    "thumbnailUrl": string
}

type PhotoArray = Photo[];
type AlbumArray = Album[];

async function getAlbumsForUser(userId: number) {
    const albums = await fetch("https://jsonplaceholder.typicode.com/albums");

    const asJson: AlbumArray = await albums.json();

    return asJson.filter((album) => album.userId === userId);
}

async function getFirstPhotoForAlbum(albumId: number): Promise<Photo> {
    const photos = await fetch("https://jsonplaceholder.typicode.com/photos");

    const asJson: PhotoArray = await photos.json();

    return asJson.filter((p) => p.albumId === albumId)[0];
}

document.querySelector('#app')!.innerHTML = `
    <h1>Albums viewer</h1>

    <form>
        <input name="userId" type="number" id="userId">
        <button type="submit">
            Récupérer
        </button>
    </form>

    <div id="albumContainer">
    </div>
`;

const form = document.querySelector("form")!;
const userInput = document.querySelector("#userId") as HTMLInputElement;
const albumContainer = document.querySelector("#albumContainer")!;

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // const data = new FormData(form);
    // OU const userId = data.get("userId")

    // valeur en nombre de l'input
    const userId = userInput.valueAsNumber;

    const albums = await getAlbumsForUser(userId);

    let html = '';

    for (const album of albums) {
        const firstPhoto = await getFirstPhotoForAlbum(album.userId);

        html += `<div>
            <h2>${album.title}</h2>
            <img src="${firstPhoto.url}" />
        </div>`;
    }

    albumContainer.innerHTML = html;
});