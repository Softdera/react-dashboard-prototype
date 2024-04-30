import React, { useState, useEffect } from 'react';
import '../index.css';
import './Mob.css';
import '../assets/AtmCard.jpeg';


const Mob = () => {

  const [showDownPart, setShowDownPart] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowDownPart(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePercentageClick = () => {
    if (window.innerWidth <= 768) {
      setShowDownPart(!showDownPart);
    }
  };

  return (
    <div className='mobile_container'>
      <div className='percentage' onClick={handlePercentageClick}>
        <div className='percentage_38'>
          <strong className='thirty'>38%</strong>
        </div>
      </div>
      <button className='btnn'>
        <strong className='ten'>$10,600</strong>
      </button>
      <h4 className='myCard'>My card</h4>
      <div > 
            <img alt='Atm_Card' className='Atm_Card'
            src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQEDBAYHAgj/xABEEAABAwIDBAUHCgUDBQEAAAABAAIDBBEFEiETMUFRBgciMnEUFVJhkrLRIyRCRFRjc4GRoRY0U6KxM0NyJsHC8PEX/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EACIRAAICAQQDAQEBAAAAAAAAAAABAgMRBBITMSFBURShIv/aAAwDAQACEQMRAD8A6YiItZyEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBEul0ARLpcc0ARLjmEuOaAIiXTI8hEul0ARETwAiXS45hAEREAREQBERAEO5FR3dPgpBzLHesyrgxKenwqkhMETyzaTXJeQbE2G7VYA6zsbP1Wi9l3xWp1bPn1T+M/3ijYtL2Xqw00Wl4PNnfLPZt46zMb+zUXsu+K9DrJxs/VaL2XfFQrOjuKiqNK/DqkTtbnLNnuHO+5eYsPkMYkMbshNg7KbE+KshpqpdYK5X2Lsn29Y2Nn6rR+y74q63rCxs/VaL2XfFQ8dA4W+Tde9rZTe/LxV9tG4aGM3Og7JV60NL8YRU9VPGSVHT7G/s9J7LvivR6fYz/QpPZd8VEeTutfI61r93gqeSPccrY3l3EBpup/HR3hEfptJb+P8X+z0nsu+KDp9i/8AQpPZd8VCvpHNdZzSDyIsUbSE/wDxUT0ta6RbG+b9k+zp3i7v9mlt/wAXfFYeI9ZOKUsgjigo3OHfu12n7qIrfmkBcP8AUPdH/davNE/MXOvc6lZ3Qu8Fyuf03A9amNj6rQ+y74ryetbG/slD7LvitHexw4KyQeS4dcV6O1ZL6b7/APq+N/ZKH2XfFVHWtjf2Sh9l3xWgWJ3Ak8hqVJ1+CVVBQxVMxFzMYZouML7ZmX5hzO0CORHBcbIJ4aO90n5NuHWpjR30lCR/xd8V0PoX0lZ0mwx1RstjPE/ZzMzXANrgg8lwAArq/Uv/ACOKX37dvuqLa4qOUjquxylhnR0RFjNIREQBERAFR3dPgqqjtxUh9HAqiO9bU6f7z/eKuxQBxsRv0V+aP55UfjP94rIibl4L6euC2o8Cc/LN9Z1g5hUl2FDNOLZjUd1uWwHd3XufzKjqHpDFTYPT4bPh+2bC7OXGXKHfKF+7LfjbfZa1tGtbe6xpq0NFgdyp/FpoLGP6T+i6TybuzpjHHLJN5riDpnNdL8pe5a0tu3TQ6t/Q81g1/SeGrrMPqTTCN1HI14Y2XsvAIOotvNt60WoxFwvYn9VHS1znbnFZpR00X4j/AEsTtksHU5Om1G/OZcMgO1j2MoEpDSw3uALaE5lcpunNPHI1zaGC7cgzCQBzsrbC5tbieC5Dty4WJV6N5NhdZ2qsYUP6y5Rs+nQa2rir6+aqbptDfK5wcRoBvAA4clSzI4y9+4LUaUuuLGywcQxyeSXZwSu2UZtv7x5+C0R1K8LBy9O+zYat/lEpe8D1eoclhvgaeF1Dx4zKO/qsmPFWO7zSFpV9bKHXNF6SkaeCxn0LVlCrjeNCm0aeKNVsZkjGpBJh9ZFV0zWGWF2Zm0Fxe1tQpTGq2GswwsivtJ5YLxuIJjip4nRsLrC2Zxe46bgBzWEXNVs2VUtPBvJbG6SWDA2Nl0/qdblosT/Gb7q52bLpHVF/J4l+M33VTqopVMu08m5nQERF5B6QREQBERAFR3dKqqO7p8FK7D6OJzm1VP8Aiv8AeK8unDWrHrJstXUD71/vFYE1SQDqvpuXbFYPn9mWyapo31L8xy5OV7X/AGWxUWAUUoDKmlhOdtw50tuW42/9usPopNFXUrWwzwidjbOje8A/otzojHCx0pnp4IImgPL5mgAgX3nxXwmo1GrlbLLff0+nqqoVawkcd6W4acExh9I2QPiLRJG5rs3ZN9CfVYqFDlsXWFjMGOdJHz0jxJTwxNhjkH07Em49V3FQEcd19HRGbrTn2YHTFye3o9RMJWfTQ3svNNDzWbNIyipzJa7z3BzK0ceTTChGFi1TsY/Joj8o4dsj6IUMG8t3BZDsz3Oe8kucbklVDByWiNCSNH5kyw1pC9AuHrV8R3XrZJLTlVmj+Flsrmrf+guBYZi+FmpxFkz3mVzBlkLQALcloxhXVeqxn/Tr2i121Dz4aBYNZGddeYmX821/6RMw9A+jbIs9XSVLddAyqeTb9VhYv0S6MMw6rdQ0le2eOJzmP25IBA4gm1lvEdJLUQx5yc4362Fr6rz0ppxSdH8RmpoGAmleJCSBZtjqvMWou3dnbprx0fOQluLrpvU+c1HiR++b7q5Ox/Zb4LqvUy69Dif4zfdXramWazFRHFh0VEReYegEREAREQBUd3T4Kqo7unwUoM+d8RltXVQ++f7xWA55eQGgkk2AaLknkFdxI/P6r8eT3ivFBVto6tk7odrlvlbny2NtHA2Oo3jTfqvXbbijzYwW4rNhlYTNtKUAQECXM9gDSRcDU66a6XVkYVO5kMgpmZJiBG/OwAm17HXsm3A2UwzFaN1ZPJK2XyR7GAUsjGS5ntiDAcxF2kEbxqqUVXhzKKlpKpjqhjJdq8bBjADkIsbWMmp3k8PWVWlL4bIwXoipKWSnm2U7DG9u9twf3Gh/JSMGHVXyThCSJnZY8jg7MeVgTY+Nl4mdt6l8hkMl7Wc6MM0sNMo0A04KWhmphQU9Lmccs20c5sLW5RYDhYvOm86qxy2ryaoJRFLh84ZI4xHLCXCXUAgtFyLX1IA4XULiMVZLCK+oiLaawyHONATobXuLn1KUrOk2GNqakNdPZlVNPHZg+UL4y0DfpYlQ1ZjFHNgPksZl8pfTwQuaW9kbNziTf15ln/W4vwjrkw/BaoYZq6R0dFFtXNALu01oFzpq4gK4KOsFPLUOpXiGIuDySARl73ZvcgcSAsbo3iEOH1T/ACsZqZ+Uvj2ZdmLXBzdzgd45qRGP0z6LERLGXSzbdtMNmbxtltftZrWvrqCfXyiWsvT8InnmDh1ayWOGWmLZJA4tBe36IBdc3sLAgm9uC8ysfBO+CYFkkfeaSNFdqMepZZaTiL1Bqn7F1pNrGxhGXPe9mHUFu8KMxjEGV2MVFXTNMcUhGVp0tZoHM8uZV9Ous3f7R3HUS9ol20NQ50LRA4OqATFewzAak68rb1ejoq+KoNNTtnjmLM5ZDLa7bXvdpsdFYoMZo4YsNa987nQNnbN2NAJGkXGutr7lKUuPUUdSwNgkkibAyEyZ8jiGtI3WItcrSr9/ot3xmYgbi7odvHWV+xsSXisfuBte2a+/jZYdRJWTxmOesq5WE6skqHuafyJUzBiEHm3Y9raCF8VjG0nV5dfad4DW2UaepYWzaVbGlT8tYOJadSIh0B5FdP6mRlosUH37fdWjGnC6H1UxiKmxH1yt/wALNraNtTZklpdjyb4iIvEICIiAIiIAqPPZPgqncvD+4fBSuwfNmIH5/Vfjye8VbpomTVEcUkzYWPNjI/UN8QvVeb19Ufv5PeKs2uvZjjBljFZJOfDqKOnMkWKwTPDQRE1ovfTTvX48lhsaArQdoLX5K9EwvO5VO3asdmhSwZEWu5WcWqzTxbGI/LPGpH0R8VlvLKKnMsh13MbzKgnNfNI6STV7jclUqM7WdqMpGG2MnfZZVLQTVLi2CF0hG8NCvNhvwV6MOjuI3uZfeWmy1w0pojSUiwasNRHA6mmY6Thk1txNvzWbLgtJA2J0lRUgSm0ZNJbN/d4fqsluN1PlLJ5WQvc0EWy2BuQeHgvEuMTOZC1jY2GI3zNv27AAXv6m8F1+eZPHLJh4hgstO52xZNJHG0Oke+LJlvc7rngFGmK3BbBNjUksUsexiDZG5dL9nQg214gqLLQV0tO32dqrPZiBttQr0bnN1uvZYmSyjga6OXU/RkwVDm7ys+Gq5qJbor0biFbGU4EpziTsczXDVdC6sreTV9v6jf8AC5TFKRxXTeqeQyU2I+qRv+Fxrbt2naYtszA38KqoFVeAYwiIgCIiAHcvD+47wXs7l5IBGqBnzPXn5/VDdaeT3iq0EDKiWTavexkUZkJYLuNiBYfqtr6SdAsVgxapkomMnppJHSNIeA5tzexB8VFw4BilNIHbJ8cjdzmPAI/MFekpOawmUKLye6Ho6Zo6eV82Xax53AW7JNiN55OvbfoQFnUmCsc2JwnAuGl+0AAFww/+fHkrNPhdVHbNE4eH7LzilLis7GQU9PI6JvEvt+Q10CRq8+WXxUV2WMWwwSNfUNmd8iw9kt07gdp43/ZUqsDgp2SvdUusyMEXAbdxNuP+N6w3YXj4LckcwyAhlp+6DvtrpdWThPSQm4bUDsZP5j6Po793qVjs2LESzkS6MuswqKnr4KTyprdpHI4vfbK3I0nUjgbfkr56OyBxEtU2PLI5jy5o7ADSbkX5i3hdQ7ujuOG16ZxIvvkHHfxVP4cx299g+9rf6vDlvVUr7n0yHcy/itBHh9FtjVtmkLmhuzIykFjHG3Ejt2B9Sg/Kj61Lfw/j4hMOzl2Rtdm17Jtu0v6la/hbGD9VPtBcKy72yOWRgNqirrao81l/wvjA30n94XodGcX+x/3hWQtsXZKuaMdlQCN6vNkDldb0bxYb6T+8K63o9iw+qn2gtcNQ/ZdHUfSwLKoKyhgOKj6qfaC9jAsU+yn2gr+WL7LOeHsxGvK6j1OuBpMT/Fb7oWiU/RXG5yNnR3v94F1Xq86Py4DhUjap7HVE8md4ZqG6WAB4rJrbYcbSK7JxawjbAioFVeMZgiIgCIiAKhCqhQGLUQ7QWUZJhjS69lN2umUcl2ptEYIHzU30bqvmpnoBTuUckyhTySG0gRhLB9AJ5qZ6AU9lCZQnJIbUQPmpvop5qb6KnsoTKE5JfSNqIHzU30VXzU30VO5QmUJyS+k7SC81N9FU81N9FT2UJlCnkf0bSB81N9AJ5qZ6AU9lCZQo5GNpA+amegEGEs9EKeyhMo5JyMjaiNp6ER27KkYxYa71XLZVG9cOTZOMFbIiKCQiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID//2Q==' />
        </div>
       
        <div className="downPart">
        <div className='Trans_Container'>
                        <div class="row">
                            <div class="col">
                                <p className='Transaction'>Transaction</p>
                            </div>
                            <div class="col">
                                <button className='plus_red'>+</button>
                            </div>
                        </div>

                    </div>


                    <div className='Taxi_Container'>
                        <div class="row">
                            <div class="col">
                            <i class="fa-solid fa-taxi" style={{ color: '#FF0000'}} ></i>
                            </div>
                            <div class="col">
                                <p className='para'>
                                    <strong>Taxi</strong>
                                     <br/> 1:21 PM</p>

                            </div>
                            <div class="col">
                            <p className='parah'>$9.20</p>

                            </div>
                        </div>
                        </div>

                        <div className='Shopping_Container'>
                        <div class="row">
                            <div class="col">
                            <i class="fa-solid fa-cart-shopping" style={{ color: '#FF0000'}}></i>
                            </div>
                            <div class="col">
                            <p className='para'> 
                            <strong>Shopping</strong>
                            <br/>
                            11:15 AM
                            </p>
                            </div>
                            <div class="col">
                            <p className='parah'>$142.00</p>

                            </div>
                        </div>

                        <div className='Netflix_Container'>
                        <div class="row">
                            <div class="col">
                            <img className='net_img'
                            alt='net_img'
                            src='data:image/png;base64,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'></img>
                            </div>
                            <div class="col">
                            <p className='para'>
                            <strong>Netflix</strong>
                            <br/>
                            3rd Jan, 2024
                                </p>
                            </div>
                            <div class="col">
                            <p className='parah'>$24.99</p>
                            </div>
                        </div>

                    </div>

                    </div>
                    </div>





          </div>

       
  )
}

export default Mob;
