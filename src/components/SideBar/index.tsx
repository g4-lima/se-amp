import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

import { Container, Level1, Level2 } from './styles';
import { List } from './data';

const SideBar: React.FC = () => {
    const [show, setShow] = useState(0);

    return (
        <Container>
            {List.map(item => (
                <Level1>
                    <div className="line1">
                        <IoIosArrowDown size={18} color="#F22020" />
                        {item.category}
                    </div>
                    {item.sections.map(section => (
                        <Level2
                            onClick={() =>
                                setShow(section.id !== show ? section.id : 0)
                            }
                        >
                            <div className="line2">
                                {section.id === show ? (
                                    <IoIosArrowDown size={18} color="#F22020" />
                                ) : (
                                    <IoIosArrowForward
                                        size={18}
                                        color="#F22020"
                                    />
                                )}
                                {section.name}
                            </div>
                            {show === section.id
                                ? section.products.map(product => (
                                      <p>{product.name}</p>
                                  ))
                                : null}
                        </Level2>
                    ))}
                </Level1>
            ))}
        </Container>
    );
};

export default SideBar;
