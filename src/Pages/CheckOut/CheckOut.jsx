import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
   
   const service = useLoaderData()

   const {title, _id} = service;
   
    return (
        <div>
     <h2>Book Service:  {title}</h2>
        <form>
        <div className="grid md:grid-cols-2 gap-6">
        <div className="form-control">
          <input type="text" placeholder="First Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Last Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="number" placeholder="Your Phone" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="email" placeholder="Your email" className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control mt-6">
          <input  className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
        </div>

        </form>
      <div className="card-body">
      </div>
    </div>
    );
};

export default CheckOut;