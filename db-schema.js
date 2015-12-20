{
  posts: [
    '{{repeat(70)}}',
    {
      id: '{{index()}}',
      title: '{{lorem(5, "words")}}',
      image: '{{random("http://lorempixel.com/800/350/", "http://lorempixel.com/800/350/abstract/", "http://lorempixel.com/800/350/food/", "http://lorempixel.com/800/200/sports/", "http://lorempixel.com/800/350/technics/", "http://lorempixel.com/800/350/people/", "http://lorempixel.com/800/350/nature/", "http://lorempixel.com/800/350/fashion/")}}',
      body: '{{lorem(10, "paragraphs")}}',
      authorId: '{{integer(0, 29)}}',
      posted: '{{date()}}'
    }
  ],
  comments: [
    '{{repeat(500)}}',
    {
      id: '{{index()}}',
      postId: '{{integer(70)}}',
      authorId: '{{integer(0, 29)}}',
      body: '{{lorem(10, "sentences")}}',
      date: '{{date()}}'
    }
  ],
  authors: [
    '{{repeat(30)}}',
    {
      id: '{{index()}}',
      firstname: '{{firstName()}}',
      lastname: '{{surname()}}',
      gender: '{{gender()}}',
      email: '{{email()}}',
      bio: '{{lorem(3, "sentences")}}'
    }
  ]
}