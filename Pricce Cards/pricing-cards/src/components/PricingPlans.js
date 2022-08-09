import allPricingPlans from "./pricingPlanData.js";
function PricingPlans(props) {
  console.log(allPricingPlans);

  return (
    <div className="relative">
      <div className="absolute inset-0 flex flex-col">
        <div className=" flex-1"></div>
        <div className="bg-slate-250 flex-1"></div>
      </div>
      <div className="grid  max-w-7xl lg:grid-cols-3 gap-12 lg:gap-8 py-24 mx-auto px-4 sm:px-6 lg:px-8 ">
        {allPricingPlans.map((data) => {
          return (
            <div className="border border-slate-200 shadow-lg p-8 bg-white rounded-2xl relative  flex flex-col">
              <h3 className="text-lg font-semibold leading-5"> {data.title}</h3>

              {data.mostPopular && (
                <p className="absolute top-0 -translate-y-1/2 bg-cyan-500 text-white px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-md ">
                  Most Popular
                </p>
              )}

              <p className="mt-4 text-slate-700 text-sm leading-6">
                {data.description}
              </p>

              {/* PRICE */}

              <div className="mt-4 bg-slate-50 p-6 rounded-lg -mx-6">
                <p className="text-sm font-semibold text-slate-500 flex items-center">
                  <span>{data.Currency}</span>
                  <span className="text-4xl text-slate-900 ml-3">
                    ${data.price}
                  </span>
                  <span className="ml-1.5">{data.frequency}</span>
                </p>
              </div>

              {/* Features */}

              <ul className="mt-6 space-y-6 flex-1">
                {data.features.map((feature) => (
                  <li
                    className="text-sm text-slate-700 leading-6 flex"
                    key={feature}
                  >
                    <img
                      height="30"
                      width="20"
                      className="mr-2"
                      src="https://www.svgrepo.com/show/384403/accept-check-good-mark-ok-tick.svg"
                      alt=""
                    />
                    <span className="">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}

              <a
                href=""
                className={`text-white mt-8 block px-6 py-4 text-small font-semibold leading-4 text-center rounded-lg shadow-md ${
                  data.mostPopular
                    ? "text-white bg-cyan-500 hover:bg-cyan-600 shadow-md"
                    : "text-cyan-700 hover:bg-cyan-100"
                }`}
              >
                {data.cta}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PricingPlans;
