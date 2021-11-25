const useGenres = (selectedGenres) => {
    if(selectedGenres.length < 1) return '';

    const genresId = selectedGenres.map(genre => genre.id);
    return genresId.reduce((acc,cur) => acc + "," + cur);
}

export default useGenres;