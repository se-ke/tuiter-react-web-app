import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () => {
    return (`
        <ul class="list-group position-relative pe-0">
            ${posts.map(post => PostSummaryItem(post)).join('')}
        </ul>
    `)
}
export default PostSummaryList;