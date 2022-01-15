import React from 'react';
import "../leftSilider/Left.css";
import { BiChevronRight } from 'react-icons/bi';
import { BsFillCalendar2DayFill } from 'react-icons/bs';
import { GrConnect } from 'react-icons/gr';

function Left() {
    return (
        <>
            <div className="rightHeader">
                <div className="bgLiner">
                    <h1 className='text-white rightHederH1 d-inline-block pt-5 pb-3 ps-5'>Left Sidebar Page</h1>
                    <p className='text-white ps-5'>Home / <a className='d-inline-block rightHederp'>Left Sidebar Page</a></p>
                </div>
            </div>
            <div className="rightContainer">
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <form>
                            <input type="text" className='rightSearch' placeholder='Start Searching...' />
                        </form>
                        <div className="ConImag">
                            <img className='rightImg1' src="./assets/morePages/right1.jpg" alt="" />
                        </div>
                        <BiChevronRight className='rigthIcon3' />
                        <h3 className='rightH3'>LATEST POSTS</h3>

                        <div className="rightDiv1">
                            <div className="rightDemo">
                                <img src="./assets/morePages/right2.jpg" className='rightRight2Img' alt="" />
                                <div className="rightIconConnect">
                                    <GrConnect className="rightChain" />
                                </div>
                            </div>
                            <h4 className='rightH4'>Live your myth in Greece</h4>
                            <p className='rightConPN'> <BsFillCalendar2DayFill className='rightConIcon' />  23/11/2016</p>
                        </div>

                        <div className="rightDiv1">
                            <div className="rightDemo">
                                <img src="./assets/morePages/right3.jpg" className='rightRight2Img' alt="" />
                                <div className="rightIconConnect">
                                    <GrConnect className="rightChain" />
                                </div>
                            </div>
                            <h4 className='rightH4'>Live your myth in Greece</h4>
                            <p className='rightConPN'> <BsFillCalendar2DayFill className='rightConIcon' />  23/11/2016</p>
                        </div>

                        <div className="rightDiv1">
                            <div className="rightDemo">
                                <img src="./assets/morePages/rig.jpg" className='rightRight2Img' alt="" />
                                <div className="rightIconConnect">
                                    <GrConnect className="rightChain" />
                                </div>
                            </div>
                            <h4 className='rightH4'>Live your myth in Greece</h4>
                            <p className='rightConPN'> <BsFillCalendar2DayFill className='rightConIcon' />  23/11/2016</p>
                        </div>

                        <div className="rightDiv1">
                            <div className="rightDemo">
                                <img src="./assets/morePages/right5.jpg" className='rightRight2Img' alt="" />
                                <div className="rightIconConnect">
                                    <GrConnect className="rightChain" />
                                </div>
                            </div>
                            <h4 className='rightH4'>Live your myth in Greece</h4>
                            <p className='rightConPN'> <BsFillCalendar2DayFill className='rightConIcon' />  23/11/2016</p>
                        </div>

                        <div className="rightDiv1">
                            <div className="rightDemo">
                                <img src="./assets/morePages/right6.jpg" className='rightRight2Img' alt="" />
                                <div className="rightIconConnect">
                                    <GrConnect className="rightChain" />
                                </div>
                            </div>
                            <h4 className='rightH4'>Live your myth in Greece</h4>
                            <p className='rightConPN'> <BsFillCalendar2DayFill className='rightConIcon' />  23/11/2016</p>
                        </div>

                    </div>
                    <div className="col-md-9">
                        <h1 className='rightContainerH1'>This is a left sidebar page</h1>
                        <p className='rightConP'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                        <p className='rightConP'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                        <p className='rightConP'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                        <p className='rightConP'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Left
