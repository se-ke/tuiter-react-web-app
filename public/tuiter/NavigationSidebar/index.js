const NavigationSidebar = () => {
    return(`
        <ul class="list-group mb-2">
            <li class="list-group-item">
                <i class="fab fa-twitter"></i>
            </li>
            <li class="list-group-item">
                <i class="fa fa-home"></i>
                <span class="d-none d-xl-inline">Home</span>
            </li>
            <li class="list-group-item active">
                <i class="fa fa-hashtag"></i>
                <span class="d-none d-xl-inline">Explore</span>
            </li>
            <li class="list-group-item">
                <i class="fa fa-bell"></i>
                <span class="d-none d-xl-inline">Notifications</span>
            </li>
            <li class="list-group-item">
                <i class="fa fa-envelope"></i>
                <span class="d-none d-xl-inline">Messages</span>
            </li>
            <li class="list-group-item">
                <i class="fa fa-bookmark"></i>
                <span class="d-none d-xl-inline">Bookmarks</span>
            </li>
            <li class="list-group-item">
                <i class="fa fa-list"></i>
                <span class="d-none d-xl-inline">Lists</span>
            </li>
            <li class="list-group-item">
                <i class="fa fa-user"></i>
                <span class="d-none d-xl-inline">Profile</span>
            </li>
            <li class="list-group-item">
                <span class="fa-stack">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fas fa-ellipsis-h fa-stack-1x text-white"></i>
                </span>
                <span class="d-none d-xl-inline">More</span>
            </li>
        </ul>
        <button class="btn btn-primary w-100 override-bs ps-0 pe-0">
            Tweet
        </button>
 `);
}
export default NavigationSidebar;