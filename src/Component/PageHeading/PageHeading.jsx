
const PageHeading = ({heading,subheading}) => {
    return (
        <div className="font-montserrat text-center space-y-2">
            <h1 className="text-4xl font-semibold">{heading}</h1>
            <p className="text-lg font-normal">{subheading}</p>
        </div>
    );
};

export default PageHeading;