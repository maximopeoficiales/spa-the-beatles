export function CardAlbums(props) {
  let { albumName, genre, trackCount, created_at, albumId } = props;
  return `
        <article class="p-2  bg-white rounded-lg shadow-lg ">
          <h6 class="p-2 my-1 font-bold text-lg text-center">${albumName}</h6>
          <div class="text-gray-700 text-base">
               <p><b>Genre: </b> ${genre}</p>
               <p><b>Songs: </b> ${trackCount}</p>
               <p><b>Created At: </b> ${created_at}</p>
           </div>
           <a href="./#/album/${albumId}" class="text-center px-2 py-2 my-2 block rounded-lg bg-indigo-700 text-white font-semibold">Ver mas</a>
        </article>
     `;
}
