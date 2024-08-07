import CountUp from "react-countup";

const AboutWidget = () => {
  return (
    <>
      <div className="widget-container">
        <div className="widget">
          <p>
            <CountUp end={78} duration={5} />
            k+
          </p>
          <p>Delivered Units</p>
        </div>
        <div className="widget">
          <p>
            <CountUp end={60} duration={5} />+
          </p>
          <p>Developments</p>
        </div>
        <div className="widget">
          <p>
            <CountUp end={24} duration={5} />/<CountUp end={7} duration={3} />{" "}
          </p>
          <p>Customer Service</p>
        </div>
        <div className="widget">
          <p>
            <CountUp end={100} duration={5} />%
          </p>
          <p>Satisfaction</p>
        </div>
      </div>
    </>
  );
};

export default AboutWidget;
