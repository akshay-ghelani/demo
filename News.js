import React, { Component } from 'react'
import MainNews from './MainNews';

export default class News extends Component {

  constructor(){
    super()
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
    
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bf202fe76859463db2f3293c20f4238a&page=1";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles})
  }

   handalprevclick = async() =>{
      console.log("previous");
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bf202fe76859463db2f3293c20f4238a&page=${this.state.page - 1}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData)

      this.setState({
        page : this.state.page - 1,
        articles: parsedData.articles

      })
   }

   handalnextclick = async() =>{
      console.log("next");
      
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bf202fe76859463db2f3293c20f4238a&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData)
      
      this.setState({
        
        page : this.state.page + 1,
        articles: parsedData.articles
      })

   }

  render() {
    return (
      <>
      <div>
        <div className='container my-3'>
          <h1>Top Handline</h1>
             <div className='row'>
                    {this.state.articles.map((element)=>{
                        return  <div className='col-md-4' key={element.url}>
                                      <MainNews  title={element.title?element.title:""} description={element.description?element.description:"this discription is null"}  imageUrl={element.urlToImage?element.urlToImage:"https://media.istockphoto.com/id/519611160/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=0HueaQHkdGC4Fw87s3DbeTE9Orv3mqHRLce88LV47E4="} newsUrl={element.url}  />
                                </div>
                     })}
                          <div className='container d-flex justify-content-between'>
                          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handalprevclick}>&laquo; Previous</button>
                          <button type="button" className="btn btn-dark" onClick={this.handalnextclick}>Next &raquo;</button>
                          </div>
              </div>
        </div>
      </div>
      </>
    )
  }
}
