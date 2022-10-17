import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
           <div class="row mb-2 ms-0">
                <div class="col-11 ps-0 pe-0">
                    <div class="input-group">
                        <span class="input-group-text search-icon bg-white">
                            <i class="fas fa-search text-muted"></i>
                        </span>
                        <input type="text" class="form-control searchbar" placeholder="Search Twitter">
                    </div>
                </div>
                <div class="col-1 d-flex align-items-center text-primary">
                    <i class="fas fa-cog fa-2x"></i>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="./for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./sports.html">Sports</a>
                </li>
                <li class="d-none d-md-inline nav-item">
                    <a class="nav-link" href="./entertainment.html">Entertainment</a>
                </li>
           </ul>
           <div class="position-relative mb-2">
                <img class="w-100" src="../../images/starship.jpg" alt="">
                <h2 class="text-white fw-bold position-absolute spaceship">SpaceX's Starship</h2>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
