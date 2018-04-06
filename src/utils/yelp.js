const apiKey = 'uNyQH4MffujkODy7ciKmmqXE9B1zRj-gFhlAwI9WLMEVq59pM-Do3LXwajlSH_8oIzHZuVRMjMepUJGL_rqsQlf4d4y66c1-cvAP5LsCH7jOYODZZm8Y2CGF8rM8WnYx';
export const Yelp =  {
    search (term, location, sortBy, limit, offset) {
        const sendUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=${limit}&offset=${offset}`;
        return fetch (sendUrl,
                    { headers:{
                        Authorization:`Bearer ${apiKey}`
                        }
                    } 
                ).then((response) => response.json()
 
                ).then((jsonResponse)=>{
                    if (jsonResponse.businesses){                      
                        

                        const businessDetailedList = jsonResponse.businesses.map((business)=>({      
                         
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].alias,
                            rating: business.rating,
                            reviewCount: business.review_count,
                            imageUrl:business.image_url,
                            url:business.url
                        }));

                        const businessInfo = {totalNumber:jsonResponse.total, businesses:businessDetailedList};
                        return businessInfo;
                    }
                    return "error"
                }, networkError => console.log(networkError.message))
                                  
         
    }

}


