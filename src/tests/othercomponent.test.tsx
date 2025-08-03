import {render, screen} from '@testing-library/react'
import OtherComponent from '../components/othercomponent'

describe('OtherComponent testing', () => {
    test('renders with initial count', () => {
        render(<OtherComponent count={0} />)

        expect(screen.getByText('0')).toBeInTheDocument()
    })

})