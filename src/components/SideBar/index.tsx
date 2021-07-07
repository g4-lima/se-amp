/* eslint-disable react/prop-types */
/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

import { Container, Level1, Level2, Level3 } from './styles';
import { List } from './data';

const SideBar: React.FC = props => {
    const [show, setShow] = useState(0);
    return (
        <Container>
            {List.map(
                item =>
                    item.id == props.children && (
                        <Level1>
                            <div className="line1">
                                <IoIosArrowDown size={18} color="#F22020" />
                                {item.category}
                            </div>
                            {item.sections.map(section => (
                                <>
                                    <Level2
                                        onClick={() =>
                                            setShow(
                                                section.id !== show
                                                    ? section.id
                                                    : 0,
                                            )
                                        }
                                    >
                                        <div className="line2">
                                            {section.id === show ? (
                                                <IoIosArrowDown
                                                    size={18}
                                                    color="#F22020"
                                                />
                                            ) : (
                                                <IoIosArrowForward
                                                    size={18}
                                                    color="#F22020"
                                                />
                                            )}
                                            <p>{section.name}</p>
                                        </div>
                                    </Level2>

                                    <Level3>
                                        {show === section.id
                                            ? section.products.map(product => (
                                                  <p>{product.name}</p>
                                              ))
                                            : null}
                                    </Level3>
                                </>
                            ))}
                        </Level1>
                    ),
            )}
        </Container>
    );
};

export default SideBar;
