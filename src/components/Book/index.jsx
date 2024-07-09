import React from 'react'
import {Container, Cover, Title, Author} from './styles'

const Book = ({book, pickBook, isLarge}) => (
    <Container onClick={pickBook ? () => pickBook(book) : undefined} $isLarge={isLarge}>
        <Cover alt={`Book cover for ${book.title} by ${book.author}`} src={book.image}/>
        <figcaption>
            <Title $isLarge={isLarge}>{book.title}</Title>
            <Author>{book.author}</Author>
        </figcaption>
    </Container>
)

export default Book