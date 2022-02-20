import './App.css';
import path91 from './path91.png';

function App() {
  return (
    <div className='container'>
      <div className='frame-7'>
        <div className='unx valign-text-middle inter-bold-white-36px'>
          <span>
            <span className='inter-bold-white-36px'>UNX</span>
          </span>
        </div>
        <div className='frame-7-1 inter-regular-normal-white-18px'>
          <div className='products valign-text-middle'>
            <span>
              <span className='inter-regular-normal-white-18px'>Products</span>
            </span>
          </div>

          <div className='about valign-text-middle'>
            <span>
              <span className='inter-regular-normal-white-18px'>About</span>
            </span>
          </div>

          <div className='resources valign-text-middle'>
            <span>
              <span className='inter-regular-normal-white-18px'>Resources</span>
            </span>
          </div>

          <div className='place valign-text-middle'>
            <span>
              <span className='inter-regular-normal-white-18px'>Contact</span>
            </span>
          </div>
        </div>

        <div className='frame-7-2'>
          <div className='dashboard valign-text-middle inter-bold-white-18px'>
            <span>
              <span className='inter-bold-white-18px'>Dashboard</span>
            </span>
          </div>
        </div>
      </div>

      <div className='group-7'>
        <h1 className='best-way-to inter-bold-white-64px'>The Best Way to</h1>
        <h1 className='gradient-text track-your-daily-progress inter-bold-white-64px'>
          {' '}
          Track your Daily Progress
        </h1>
      </div>

      <div className='unx-allows-you-to-tr valign-text-middle poppins-medium-nobel-18px'>
        <span>
          <span className='poppins-medium-nobel-18px'>
            UNX Allows you to track all your daily task progress using
            gamification methods and earn rewars for specifc coupans
          </span>
        </span>
      </div>

      <div className='frame-8'>
        <div className='try-this-app valign-text-middle inter-bold-white-18px'>
          <span>
            <span className='inter-bold-while-18px'> Try this app</span>
          </span>
        </div>
      </div>
      <div className='large image-frame'>
        <img
          src={path91}
          width='795'
          height='320'
          left='19.68%'
          right='2.66%'
          top='42.5%'
          bottom='24.19%'
        />
      </div>
      <div className='small image-frame'>
        <img
          src={path91}
          width='300'
          height='100'
          left='19.68%'
          right='2.66%'
          top='42.5%'
          bottom='24.19%'
        />
      </div>
    </div>
  );
}

export default App;
