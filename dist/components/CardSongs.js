export function CardSongs(props) {
  let { id, albumName, trackName, created_at } = props;
  return `
     <article class="p-2 rounded-lg shadow-lg ">
       <h6 class="p-2 my-1 font-bold text-lg text-center">${trackName}</h6>
       <div class="text-gray-700 text-base">
        <p><b>Album: </b> ${albumName}</p>
        <p><b>Created At: </b> ${created_at}</p>
        </div>
        <a href="./#/songs/${id}" class="text-center px-2 py-2 my-2 block rounded-lg bg-indigo-700 text-white font-semibold">Ver mas</a>
     </article>
  `;
}
