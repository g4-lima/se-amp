import React, { useState } from 'react';

import { Container } from './styles';
import { List } from './data';

const CategoriesList: React.FC = () => {
    const [show, setShow] = useState(false);

    return (
        <Container>
            {List.map(item => (
                <h1>
                    {item.category}
                    {item.sections.map(section => (
                        <button type="button" onClick={() => setShow(!show)}>
                            {section.name}
                            {show
                                ? section.products.map(product => (
                                      <p>{product.name}</p>
                                  ))
                                : null}
                        </button>
                    ))}
                </h1>
            ))}
        </Container>
    );
};

export default CategoriesList;
