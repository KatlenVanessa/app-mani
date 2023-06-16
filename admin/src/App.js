import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost ";
import UpdatePost from "./components/UpdatePost";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";

function App() {

  const [closedNav, setClosedNav] = useState(false);

  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");

  return (
    <div className="flex">
      {/* nav section */}
      <div className={`${getNavWidth()} h-screen bg-purple-200 transition-width border border-r`}>
        <div className="sticky top-0">
          <NavBar closed={closedNav}></NavBar>
        </div>
      </div>

      {/* content section */}
      <div className="flex-1 min-h-screen bg-purple-100">

        <div className="flex item-center">
          <button onClick={toggleNav}>
            {closedNav ? (
              <AiOutlineMenuUnfold size={25} />
            ) : (
              <AiOutlineMenuFold size={25} />
            )}

          </button>
          <SearchForm />
        </div>
        <div className="max-w-screen-lg mx-auto">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/update-post' element={<UpdatePost />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illum, libero voluptates veniam omnis eveniet impedit voluptatum quibusdam quis aperiam iure. Numquam fugit ducimus, dolore expedita aperiam veritatis eveniet delectus aliquid, rerum sequi beatae vitae illo. Nam odio cupiditate, quo ex dolorum accusamus iure animi, error qui at perferendis exercitationem vel, quod pariatur obcaecati voluptas laudantium dolorem aliquam ut repellat magnam tempora. Laborum, quaerat corrupti. Quam qui beatae iusto! Tempora sunt aliquid totam cumque, id iste adipisci dignissimos ut expedita exercitationem explicabo sequi officia incidunt est illo necessitatibus unde vitae maiores quo, earum ab ea laudantium mollitia minima! Asperiores, nemo. Expedita, nemo? Autem sapiente voluptate quae quidem, provident facilis eius dolorem doloribus! Mollitia eaque, ut, tempora commodi tempore earum necessitatibus temporibus cumque repudiandae aperiam placeat. Voluptates natus consequuntur vero hic cupiditate placeat, quisquam eos rerum corrupti eligendi aliquid voluptate repudiandae non eius et quidem unde in recusandae aliquam doloremque possimus magni dolorem ea libero! Velit, laborum laboriosam maiores odit magni molestias beatae ut itaque perspiciatis commodi, unde recusandae tenetur sapiente, aliquam suscipit. Magni fugit quos culpa explicabo perferendis, nam laboriosam rerum quaerat nulla laudantium similique aliquid harum enim sunt minus labore distinctio eum maxime facere dolor, ducimus repudiandae consequuntur quam itaque! Ullam cupiditate vel quam similique modi asperiores reprehenderit, distinctio vitae ad beatae maxime odit! Omnis autem quisquam inventore iusto odio? Tempore praesentium fugiat illo dignissimos vitae quod nisi incidunt, nam minima dicta quis quasi reprehenderit fuga est dolores minus odio! Fugit quo, tempora corrupti provident iusto atque nihil odit modi nobis? Totam fugiat dolorum nisi ipsa libero! Totam vitae explicabo asperiores officiis aut eos autem qui mollitia, a nostrum voluptatem accusamus voluptatibus labore optio quaerat dignissimos fugit animi velit. A inventore minus obcaecati sapiente totam odio quo maiores molestiae at illo. Consequuntur minima est pariatur reprehenderit reiciendis nihil rem magni magnam sunt. Incidunt soluta maxime sunt deleniti veniam similique eum exercitationem sint aliquam, a, velit natus fugiat voluptatibus debitis cumque optio dolor obcaecati! Reiciendis eaque aut deleniti veritatis ipsum porro beatae vero, velit accusantium iusto atque ratione fugit aliquid id facere voluptates et perspiciatis corporis alias nihil ea maiores voluptas explicabo iure! Vel impedit obcaecati dolores natus voluptatem minima maxime, incidunt nobis harum corrupti corporis quibusdam enim. Laborum eum accusamus autem voluptate cumque tempore consequuntur velit similique repellendus corporis, itaque architecto eos cupiditate facere nesciunt, quisquam quibusdam possimus pariatur voluptatem ullam veritatis ea? Corrupti tempora aspernatur nostrum possimus beatae dolor qui nisi cum, id obcaecati at incidunt tempore eius quia et nihil molestiae fugit quo veniam. Exercitationem neque, est eaque, veniam beatae nemo magni voluptatibus rerum laboriosam unde sit impedit, aliquid in quidem? Deserunt natus molestiae nemo numquam alias ratione nostrum fuga, laboriosam minus at aliquam quam eaque recusandae quae atque repudiandae, ducimus a quod adipisci quo soluta! Dignissimos accusantium obcaecati minima labore qui omnis, error porro tempore minus odit suscipit quas magnam reiciendis. Ut, repellendus iusto! Recusandae, enim vel dolore voluptas nam quisquam dignissimos repudiandae officiis placeat necessitatibus laboriosam aperiam, nulla eveniet minus. Consequuntur tenetur debitis voluptas praesentium.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
