import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading'
import PropTypes from'prop-types'

export class News extends Component {
static defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
}
static propTypes={
country:PropTypes.string,
pageSize:PropTypes.number,
category:PropTypes.string
}
 capitalizefirstletter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
 }   
    constructor(props){
        super(props);
        console.log("hello i am a construnctor");
        this.state={
           articles:[],
           loading:true,
         page:1       
        }
        document.title=`${this.capitalizefirstletter(this.props.category)}-NewsMonkey`;
    }
async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=d6795c990e0c40c1949207a23e0e2125&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parseddata=await data.json()
    console.log(parseddata);
    this.setState({articles:parseddata.articles,totalResults:parseddata.totalResults,loading:false})
}
   async componentDidMount(){
    // let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category} &apiKey=d6795c990e0c40c1949207a23e0e2125&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parseddata=await data.json()
    // console.log(parseddata);
    // this.setState({articles:parseddata.articles,totalResults:parseddata.totalResults,loading:false})
this.updateNews();
    }

     handlenextclick=async()=>{
//         if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
//         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}category=${this.props.category} &apiKey=d6795c990e0c40c1949207a23e0e2125&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//         this.setState({loading:true});
//         let data= await fetch(url);
//         let parseddata=await data.json()
    
// this.setState({
//     page:this.state.page+1,
//     articles:parseddata.articles,
//     loading:false
// })
//         }
this.setState({page:this.state.page+1});
this.updateNews();
    }
    handlepreviousclick=async()=>{
//         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}category=${this.props.category} &apiKey=d6795c990e0c40c1949207a23e0e2125&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//         this.setState({loading:true});
//         let data= await fetch(url);
//         let parseddata=await data.json()
// this.setState({
//     page:this.state.page-1,
//     articles:parseddata.articles,
//     loading:false
// })
this.setState({page:this.state.page-1});
this.updateNews();
    }
    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsMonkey - Top Headlines {this.capitalizefirstletter(this.props.category)} Headlines</h1>
      {this.state.loading && <Loading/>}
          <div className="row">
              {!this.state.loading && this.state.articles.map((element)=>
            { 
           return <div className='col-md-4' key={element.url}>
                <Newsitem  title={element.title} description={element.description} imageurl={element.urlToImage}  newsurl={element.url} 
                author={element.author} date={element.publishedAt} source={element.source.name}/>
             </div>
           }
              )}
            
               </div>
               <div className="container d-flex justify-content-between">
               <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onclick={this.handlepreviousclick()}>  &larr; previous</button>
               <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick()}>Next&rarr;</button>
                </div>
            </div>
        
        )
    }
}

export default News
