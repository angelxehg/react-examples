import React, { Component } from 'react'

import Layout, { BackToHome } from '../components/layout';

class LifecyclesPage extends Component {

  constructor(props) {
    super(props);
    console.log('Constructor');
    this.state = { message: 'Mensaje inicial', sY: 0, sX: 0 };
  }

  componentDidMount() {
    console.log('Mount');
    this.setState({ message: 'Mensaje montado' });
    document.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const sY = window.scrollY;
    const sX = window.scrollX;
    this.setState({ sY, sX });
  }

  componentWillUnmount() {
    console.log('Unmont');
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleClick = () => {
    this.setState({ message: 'Mensaje cambiado' });
  }

  render() {
    return (
      <Layout>
        <BackToHome />
        <h2>Ciclos de vida</h2>
        <p>{this.state.message}</p>
        <p>Y: {this.state.sY} X: {this.state.sX}</p>
        <button
          className="btn btn-secondary"
          onClick={this.handleClick}>
          Clic
        </button>
        <p>
          Saepe voluptatem aut et mollitia quia vel ut. Voluptas quaerat aut voluptatibus itaque. Sed ad voluptatibus laborum ducimus. Odit veritatis hic qui expedita ratione possimus. Doloribus temporibus maxime quis labore numquam. Vel qui eos voluptatibus consectetur.
        </p>
        <p>
          Dolor molestias aspernatur qui est nisi sapiente. Soluta veniam ut suscipit beatae quibusdam ut qui dolores. Est sunt est optio repudiandae hic.
        </p>
        <p>
          Harum aut necessitatibus vel unde dignissimos autem culpa eaque. Culpa corporis vel repellendus ea. Odio et fugiat neque sit itaque quo.
        </p>
        <p>
          Voluptas neque nihil in sit ut. Sapiente aut iste omnis quidem corrupti deleniti. Non magni sunt aut eveniet dolorem veritatis laboriosam. Minus qui totam dolor est qui ut. Necessitatibus rerum et numquam distinctio corporis et quisquam dolor. Aut ex labore voluptatum minus quo aperiam ullam necessitatibus.
        </p>
        <p>
          Nihil omnis impedit et nemo ut similique. Illo repellat deleniti quae modi et quia. At debitis ex inventore doloremque ipsum voluptas tempora. Eveniet culpa est voluptatem nihil dolorem atque voluptas. Perspiciatis error maxime eos qui exercitationem sint qui natus.
        </p>
        <p>
          At ab dolore numquam. Accusantium necessitatibus sit ipsa incidunt. Accusamus deleniti delectus dolorem reiciendis sunt delectus consequatur.
        </p>
        <p>
          Nihil expedita est qui sint cupiditate consequatur est. Quis porro iste id beatae provident. Assumenda sit quam quos tempore provident consequatur perferendis. Iure fuga voluptatem deleniti eum repellendus aut. In ut dolorum saepe at omnis labore maxime at. Excepturi quidem quam rerum.
        </p>
        <p>
          Adipisci eum et culpa qui est qui laudantium. Voluptatibus qui delectus voluptates explicabo. Alias voluptates eum voluptas. Et odio atque incidunt. Odit cumque quo quo cumque.
        </p>
        <p>
          Nostrum sint ut voluptatibus iste. Ex nemo eius porro autem libero impedit omnis. Et debitis consequatur vel omnis dignissimos mollitia quidem id. Consequuntur necessitatibus exercitationem quisquam quidem inventore rerum debitis repellat. Odio ea animi repudiandae.
        </p>
        <p>
          Et et quod sequi. Repellendus eligendi aut est. Aut adipisci et quasi est aut.
        </p>
      </Layout>
    )
  }
}

export default LifecyclesPage
