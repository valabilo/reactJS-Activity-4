import hero from "../assets/08.03.2023_18.03.52_REC.png"
const Car1 = () => {
  return (
    <main className="car1">
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-md-8 col-lg-6">
        <img src={hero} class="d-block mx-lg-auto img-fluid" alt="car1-img" width="700" height="700" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Tesla Car | MODEL 3</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-danger btn-lg px-4 me-md-2">BUY NOW</button>
          
        </div>
      </div>
    </div>
  </div>
  </main>
  );
}

export default Car1;
