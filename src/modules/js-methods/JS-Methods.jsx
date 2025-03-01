import React from 'react'
import { Container, Table, Row, Col } from 'react-bootstrap';

export default function JSMethods() {
    //Example 1  Array of string
    const name = ['Raju', 'Manvi', 'Aditya', 'Poojs'];
    //Example 2  Array of object
    const product = [
        { id: 1, name: 'Apple', price: 20 },
        { id: 2, name: 'Mango', price: 22 },
        { id: 2, name: 'Banana', price: 23 },
    ];
    //Example 3  return  map function 
    const fuits = ['Grapes', 'Avacado', 'Blueberry', 'Orange'];
    const fruitItems = fuits.map((fruit, index) => <li key={index}>{fruit}</li>);

    //Example 4  Nested return map function
    const countries = [
        { country: "USA", cities: ["Los Angeles", "San Francisco", "San Diego"] },
        { country: "India", cities: ["Mumbai", "Pune", "Nagpur"] },
        { country: "Canada", cities: ["Toronto", "Ottawa", "Hamilton"] },
    ];


    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <div className='mb-3'>
                    <span className="fw-bold text-primary">JS Methods In React</span>
                </div>
                <span className="fw-bold text-warning">Introduction:</span>
                <p>JS Methods in React is uesd for perform the specific task.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-success">Types Of Methods</span></h5>
                <p>01)<strong>map</strong></p>
                <p>02)<strong>Normal CSS:</strong></p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-primary">Array</span></h5>
                <p>An array is a fundamental data structure in computer programming that represents a collection of elements stored in a contiguous block of memory. These elements can be of the same or different data types, such as numbers, strings, objects, or even other arrays. Arrays are commonly used to organize and manipulate a group of related values.</p>
                <p>In most programming languages, including JavaScript (used in React.js), arrays are zero-indexed, which means the first element is accessed with an index of 0, the second element with an index of 1, and so on.</p>

                <h5><span class="badge text-bg-secondary">What is Array with map?</span></h5>
                <p>Arrays offer various methods and properties to manipulate and work with the data they store, such as map(), filter(), reduce(), length, etc. These methods allow developers to perform operations on the array elements easily and efficiently.</p>
                <p>Using map() over a traditional for loop in React.js has several advantages. The map() function provides a more concise and expressive way to perform transformations on arrays and is often preferred for rendering lists of elements. Here are some reasons why using map() is common in React.js:</p>
                <h5><span class="badge text-bg-warning">Map</span></h5>
                <p><b>Declarative approach:</b>map() is a higher-order function, which means it follows a declarative programming paradigm. Instead of explicitly defining the iteration steps, you only describe what you want to achieve. This makes the code easier to read and understand.</p>
                <p><b>Immutable operation:</b>React encourages immutable data handling, and map() inherently creates a new array with the transformed elements, leaving the original array unchanged. This is useful for avoiding side effects and making the application more predictable.</p>
                <p><b>No need to manage index: </b>When using map(), you don't have to manually manage the array index (as you would in a for loop) when rendering elements in React. The key prop automatically takes care of uniquely identifying each rendered component in the list.</p>
                <p><b>Cleaner code:</b> Using map() can result in more concise and cleaner code. It reduces boilerplate and increases code readability.</p>

                <h5><span class="badge text-bg-danger">Example of Array with map function</span></h5>
                <ul className='ms-3'>
                    {name.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>

                <ul className='ms-3'>
                    {product.map((product) => (
                        <li key={product.id}>{product.name} - ${product.price}</li>
                    ))}
                </ul>

                <ul className='ms-3'>{fruitItems}</ul>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span class="badge text-bg-primary">Nested Map Function</span></h5>
                <p>In React.js, a nested map function refers to using the map function inside another map function. This approach is commonly used to handle data that has multiple levels of nesting, such as an array of arrays or an array of objects that contain arrays</p>
                <p>When you encounter nested data structures in React, you can use nested map functions to iterate through the data at each level and render the corresponding UI components.</p>
                <h5><span class="badge text-bg-danger">Example of Array with map function</span></h5>
                <ul className='ms-3'>
                    {countries.map((countryObject, index) => (
                        <li key={index}>
                            <b>{countryObject.country}</b>
                            <ul className='ms-3'>
                                {countryObject.cities.map((city, cityIndex) => (
                                    <li key={cityIndex}>{city}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <Container>
                    <Row>
                        <Col md={{span:4}}>
                            <Table className='table' striped hover variant='dark'>
                                <thead>
                                    <tr>
                                        <th>Country</th>
                                        <th>Cities</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {countries.map((countryObject, index) => (
                                        <tr key={index}>
                                            <td>{countryObject.country}</td>
                                            <td>
                                                <ul>
                                                    {countryObject.cities.map((city, cityIndex) => (
                                                        <li key={cityIndex}>{city}</li>
                                                    ))}
                                                </ul>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
