import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar2 from '@/compoments/Navbar2';
import CustomizeCarousel from '@/compoments/Carousel';
import WhyBar from '@/compoments/WhyBar';
import Cards from '@/compoments/Cards';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Peaceful Meditation Group</title>
        <meta name="Peaceful Meditation Group" content="Peaceful Meditation Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="wrapper">
        <Navbar2 />
        <section id="top" style={{ backgroundColor: '#333' }}>
          <CustomizeCarousel />
          <WhyBar />
        </section>
        <Cards />
        <div className="testimonial-area">
          <div className="testimonial-solid">
            <div className="container">
              <div className="testi-icon-area">
                <div className="quote">
                  <i className="fa fa-microphone"></i>
                </div>
              </div>
              <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="">
                    <a href="#"></a>
                  </li>
                  <li data-target="#carousel-example-generic" data-slide-to="1" className="">
                    <a href="#"></a>
                  </li>
                  <li data-target="#carousel-example-generic" data-slide-to="2" className="active">
                    <a href="#"></a>
                  </li>
                  <li data-target="#carousel-example-generic" data-slide-to="3" className="">
                    <a href="#"></a>
                  </li>
                </ol>
                <div className="carousel-inner">
                  <div className="item">
                    <p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
                    <p>
                      <b>- Mark John -</b>
                    </p>
                  </div>
                  <div className="item">
                    <p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
                    <p>
                      <b>- Jaison Warner -</b>
                    </p>
                  </div>
                  <div className="item active">
                    <p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
                    <p>
                      <b>- Tony Antonio -</b>
                    </p>
                  </div>
                  <div className="item">
                    <p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
                    <p>
                      <b>- Leena Doe -</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="courses">
          <div className="container">

            <div className="row">
              <div className="col-lg-12">
                <div className="aligncenter"><h1 className="aligncenter">Courses We Offer</h1><span className="clear spacer_responsive_hide_mobile " style={{ height: 13, display: 'block' }}></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus, vero mollitia velit ad consectetur. Alias, laborum excepturi nihil autem nemo numquam, ipsa architecto non, magni consequuntur quam.</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="textbox">
                  <h3>Heading Course</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
                </div> </div>
              <div className="col-md-4">
                <div className="textbox">
                  <h3>Heading Course</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
                </div> </div>
              <div className="col-md-4">
                <div className="textbox">
                  <h3>Heading Course</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
                </div> </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="textbox">
                  <h3>Heading Course</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
                </div> </div>
              <div className="col-md-4">
                <div className="textbox">
                  <h3>Heading Course</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
                </div> </div>
              <div className="col-md-4">
                <div className="textbox">
                  <h3>Heading Course</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
                </div> </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="widget">
                  <h5 className="widgetheading">Our Contact</h5>
                  <address>
                    <strong>Abovecompany Inc</strong><br />
                    JC Main Road, Near Silnile tower<br />
                    Pin-21542 NewYork US.</address>
                  <p>
                    <i className="icon-phone"></i> (123) 456-789 - 1255-12584 <br />
                    <i className="icon-envelope-alt"></i> email@domainname.com
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget">
                  <h5 className="widgetheading">Quick Links</h5>
                  <ul className="link-list">
                    <li><a href="#">Latest Events</a></li>
                    <li><a href="#">Terms and conditions</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget">
                  <h5 className="widgetheading">Latest posts</h5>
                  <ul className="link-list">
                    <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
                    <li><a href="#">Pellentesque et pulvinar enim. Quisque at tempor ligula</a></li>
                    <li><a href="#">Natus error sit voluptatem accusantium doloremque</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget">
                  <h5 className="widgetheading">Recent News</h5>
                  <ul className="link-list">
                    <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
                    <li><a href="#">Pellentesque et pulvinar enim. Quisque at tempor ligula</a></li>
                    <li><a href="#">Natus error sit voluptatem accusantium doloremque</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="sub-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="copyright">
                    <p>
                      <span>&copy; Above Site All right reserved. Template By </span><a href="http://webthemez.com" target="_blank">WebThemez</a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="social-network">
                    <li><a href="#" data-placement="top" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#" data-placement="top" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" data-placement="top" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#" data-placement="top" title="Pinterest"><i className="fa fa-pinterest"></i></a></li>
                    <li><a href="#" data-placement="top" title="Google plus"><i className="fa fa-google-plus"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
