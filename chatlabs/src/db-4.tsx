import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid';
import CardInfo from './components/CardInfo';

function DashBoard4() {
    return (
      <>
        {/*Banner */}
        <section className=" flex justify-center bg-neutral-950">
          <div className="w-full h-full md:max-w-2xl">
            <section className="flex flex-row justify-center my-20 md:flex-row">
              <div className="flex flex-col justify-center mr-32">
                <h1 className=" text-6xl font-light uppercase text-slate-100 ">
                  <span className="text-violet-500">Dash</span>Board
                </h1>
              </div>
            </section>
          </div>
        </section>
  
        <div className="relative w-full">
          <svg
            className="absolute inset-0 z-10 w-full -translate-y-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#0a0a0a"
              fill-opacity="1"
              d="M0,128L1440,64L1440,0L0,0Z"
            ></path>
          </svg>
        </div>
        


        {/*Card */}
        <div>
      {/* Other components or content */}
      <CardInfo>
        {/* Content */}
        <div className="pt-10">
          <h1 className="text-3xl text-violet-500 font-semibold text-center mb-40 uppercase">
            Character Name
          </h1>
        </div>
        <div className="mx-10">
          <h2 className="text-xl pr-10 text-violet-500 font-medium uppercase">
            Description:
          </h2>
          <p className="text-white mt-10 mb-40">
            Lorem ipsum dolor sit amet. Non autem numquam et delectus alias et quas autem ut ipsa
            velit et molestias dolorem et corrupti quisquam. Est laboriosam fugiat non
            necessitatibus explicabo ad quasi iure sit internos totam aut excepturi earum. 33
            dolore atque qui officiis soluta aut animi molestias quo rerum repudiandae et
            molestiae excepturi qui atque quam. Quo vitae blanditiis ea veritatis repellat eos
            tenetur quod vel distinctio temporibus id voluptas omnis. Ut blanditiis aspernatur ea
            provident veniam sed mollitia sint. Sed facilis expedita qui quas sint et nobis
            repellat est quisquam internos! Ut ullam autem 33 impedit consequatur et molestias
            eaque est consequatur dolor At iusto nostrum. Ut eaque rerum et quas consequuntur non
            dolorem fugiat hic blanditiis repudiandae et ipsa nostrum sit enim ducimus aut corporis
            sint. Ut odio fugit est eius repudiandae ex neque rerum vel exercitationem tempore.
          </p>
        </div>
        {/* Buttons */}
        <div className="flex justify-between mt">
          <button className="px-7 py-2 bg-zinc-600 text-white font-semibold rounded-lg uppercase">
            Back
          </button>
          <div>
            <button className="px-4 py-2 bg-zinc-600 text-white font-semibold rounded-lg mr-2">
              <PencilIcon className="h-5 w-5" /> {/* Penna Icon */}
            </button>

            <button className="px-4 py-2 bg-zinc-600 text-white font-semibold rounded-lg">
              <TrashIcon className="h-5 w-5" /> {/* Papperskorg Icon */}
            </button>
          </div>
        </div>
      </CardInfo>
    </div>

    </>
    );
    }
  
export default DashBoard4;

//test commit