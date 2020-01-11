function solve (){
    class Post {
        title;
        content;
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post{
        likes;
        dislikes;
        comments;
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString() {
            let result = super.toString() + `\nRating: ${this.likes - this.dislikes}\n`;
            if (this.comments.length > 0){
                result += `Comments:\n`;
                this.comments.forEach(comment => {
                    result += ` * ${comment}\n`;
                });
            }
            return result.trim();
        }
    }

    class BlogPost extends Post{
        views;
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view(){
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {
        Post, SocialMediaPost, BlogPost
    }
}
