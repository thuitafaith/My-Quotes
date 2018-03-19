export class Quotes{
  author: any;
  quote: any;
  by: any;
  upvote: any;
  downvote: any;
  up:any;
  down:any;
  constructor(author:any, quote:any, by:any,upvote?:any,downvote?:any){
    this.author=author;
    this.quote=quote;
    this.by=by;
    this.downvote = downvote || 0;
    this.upvote = upvote || 0;
  }
  upVote():void{
    this.upvote += 1;
  }
  downVote():void{
    this.downvote += 1;
  }
}
