import enzyme from 'enzyme';

export const findByTestAttributes = (component: enzyme.ShallowWrapper, attribute: string) => {
    const wrapper = component.find(`[data-test='${attribute}']`);
    return wrapper;    

}

export default findByTestAttributes;
