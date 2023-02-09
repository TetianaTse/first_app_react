import { Component } from 'react';
import './Main.scss';
import data from '../data/data.json';
// import img_new_york from '../images/new_york.jpg'
import Sidebar from './Sidebar';

class Main extends Component {
    
    render() { 
        return (
            <main className='main'>
                <Sidebar/>
                <div className='main_block'>
                    {data.map(item => 
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <div className='section_title'>
                            <p>{item.description}</p>
                            <img src={item.images} alt="img_city" className='main_img'/>
                        </div>
                    </div>
                    )}
                </div>
          </main> 
        );
    }
}
 
export default Main;