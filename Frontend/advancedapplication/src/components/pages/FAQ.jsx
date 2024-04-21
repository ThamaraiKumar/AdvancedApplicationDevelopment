import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './Pages.css'
import {Link } from 'react-router-dom'


function FAQ() {
  return (
    <div className='faq'>
    <h1 style={{display:'flex',justifyContent:'center'}}>Frequently Asked Question</h1><br/>
    <div className='faq-content'>
    <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What is the purpose of the yoga academic online portal?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    This portal serves as a platform for individuals interested in studying yoga academically. 
                    It provides resources, courses, and information related to yoga studies.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Who can benefit from this portal?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Anyone interested in deepening their understanding of yoga from an academic perspective, 
                    including students, scholars, practitioners, and enthusiasts.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How do I enroll in a course?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    To enroll in a course, simply browse our course catalog, 
                    select the course you're interested in, and follow the enrollment instructions.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Are the courses self-paced or instructor-led?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Courses vary in format. Some are self-paced, allowing you to study at your own convenience,
                    while others are instructor-led with specific start and end dates.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What types of courses are available?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    We offer a variety of courses covering topics such as yoga history, 
                    philosophy, anatomy, asana practice, meditation, and more.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </div>
        <Link to='/'><button className='btn'>HOME</button></Link>
    </div>
  )
}


export default FAQ