/* eslint-disable max-len */
import React, { Component } from 'react';
import Helmet from 'react-helmet';

// Two ways to import, either all on one line, or, if you like, multiples.

import {
  List,
  Segment,
  Container,
  Divider,
  Message,
  Header,
  Icon,
  Grid,
} from 'semantic-ui-react';

// You can delete everything you want pretty much and start fresh.
// delete all the comments for sure.

// if you are an advanced coder. don"t bother reading.
// These comments are for newer users like myself.
// ... if you"re new, these instructions are helpful,
// but not gospel, simply what worked for me.

// The last import lines above way up there ^^ is where styles come from.
// This boilerplate uses the semantic-ui-react template system.
// you can find everything you need about that here: https://react.semantic-ui.com/

// "Template" in context of the next line of code,
// will be swapped for whatever you want
// if you"re making a picture page, maybe you"ll change it to "pictures".
// at the end of the page, the ~export~ has to match the word you use here.
// when you pull "template", export defines what your app calls
// what is exported is everything in betwen the class mustaches "{... }"

// This next comment just tells ESLINT (get ESLINT!)
// to calm down about making this page stateful.
// This page is just a bunch of stateless material,
// so, ESLINT can shush about wanting a pure component.

// eslint-disable-next-line react/prefer-stateless-function
class Template extends Component {
  render() {
    return (
      <div className="container">
        <Helmet title="Template" />
        <Segment color="teal" raised>
          <Container fluid textAlign="center">
            <Header as="h2" icon>
              <Icon name="copy outline" />
              Template Page
              <Header.Subheader>Adding pages to your app 101</Header.Subheader>
            </Header>
          </Container>
          <Message floating compact size="tiny">
            {' '}
            Using your prefered IDE, ie: Visual Studio Code, search all files
            inside the "src" folder for the word "template" and you"ll find all
            the references to this page. However, For the Quick visual, Below
            are the files you will need to modify, and the folders they are in.
          </Message>
        </Segment>
        <Segment color="teal" raised>
          <Message floating compact size="tiny">
            <p>
              if you"re using VScode, or any kind of halway customized IDE,
              choose "Typescript React" as a language. The colour coding and
              automatic foratting with "Prettier" and "Beautify" and "ESLINT"
              work well with this kit.
            </p>
            <p>
              So, i did also want to include a personal touch with my first
              contribution to any git, ever. (this page and the modifications to
              the other files denoting "template"), so in addition to that, i"m
              adding this link to a public Gist on github, a copy of my VScode
              sync settings, and installed extensions
              <a href="https://gist.github.com/kaigouthro/b2c9cafae8a9a480b0802847c8cdba18">
                . Check it here
              </a>
              fork it to your own gist and use
              <a href="https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync">
                {' '}
                Vs settings sync addon.
              </a>
            </p>
          </Message>
          <Container>
            <Divider />
            <Grid columns={2} stackable>
              <Grid.Row>
                <Grid.Column>
                  <Segment raised color="blue">
                    <List>
                      <List.Item>
                        <List.Icon color="orange" name="folder open" />
                        <List.Content>
                          <List.Header>src</List.Header>
                          <List.Description>
                            Source files for project
                          </List.Description>
                          <List.List>
                            <List.Item>
                              <List.Icon color="purple" name="folder open" />
                              <List.Content>
                                <List.Header>Containers</List.Header>
                                <List.Description>
                                  Folders equal to Pages of your app.
                                </List.Description>
                                <List.List>
                                  <List.Item>
                                    <List.Icon color="teal" name="folder" />
                                    <List.Content>
                                      <List.Header>App</List.Header>
                                      <List.Description>
                                        The Main App Container Folder
                                      </List.Description>
                                      <List.List>
                                        <List.Item>
                                          <List.Icon color="blue" name="file" />
                                          <List.Content>
                                            <List.Header>App.js</List.Header>
                                            <List.Description>
                                              You"ll find template has been
                                              added to the main app here.
                                            </List.Description>
                                          </List.Content>
                                        </List.Item>
                                      </List.List>
                                    </List.Content>
                                  </List.Item>
                                  <List.Item>
                                    <List.Icon color="teal" name="folder" />
                                    <List.Content>
                                      <List.Header>Template</List.Header>
                                      <List.Description>
                                        The Folder containing this page
                                      </List.Description>
                                      <List.List>
                                        <List.Item>
                                          <List.Icon color="blue" name="file" />
                                          <List.Content>
                                            <List.Header>
                                              Template.js
                                            </List.Header>
                                            <List.Description>
                                              You"ll find template has been
                                              added to the main app here.
                                            </List.Description>
                                          </List.Content>
                                        </List.Item>
                                        <List.Item>
                                          <List.Icon color="blue" name="file" />
                                          <List.Content>
                                            <List.Header>
                                              Loadable.js
                                            </List.Header>
                                            <List.Description>
                                              Goes hand in hand with each of the
                                              Pages
                                            </List.Description>
                                          </List.Content>
                                        </List.Item>
                                      </List.List>
                                    </List.Content>
                                  </List.Item>
                                </List.List>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon color="purple" name="file" />
                              <List.Content>
                                <List.Header>config.js</List.Header>
                                <List.Description>
                                  App"s Main Config file
                                </List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon color="purple" name="file" />
                              <List.Content>
                                <List.Header>routes.js</List.Header>
                                <List.Description>
                                  All the data routes for your app pages.
                                </List.Description>
                              </List.Content>
                            </List.Item>
                          </List.List>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment raised color="blue">
                    <Header as="h1">
                      <Icon
                        bordered
                        inverted
                        color="teal"
                        name="images outline"
                      />
                      <Header.Content>
                        Bonus Resources
                        <Header.Subheader>
                          <p>More to kickstart your page.</p>
                          <p>Inspiration and Assets</p>
                          <p>for Visual design.</p>
                        </Header.Subheader>
                      </Header.Content>
                    </Header>
                    <List bulleted>
                      <List.Item href="https://dribbble.com/">
                        Dribbbl
                      </List.Item>
                      <List.Item href="https://tripwire.github.io/octagon/">
                        Octagon (for semantic-ui-react)
                      </List.Item>
                      <List.Item href="http://fltdsgn.com/">
                        Flat UI Design
                      </List.Item>
                      <List.Item href="https://www.canva.com/">Canva</List.Item>
                      <List.Item href="https://unsplash.com/">
                        Unsplash
                      </List.Item>
                      <List.Item href="http://startupstockphotos.com/">
                        Startup Stock Photos
                      </List.Item>
                      <List.Item href="http://deathtothestockphoto.com/">
                        Death to the Stock Photo
                      </List.Item>
                      <List.Item href="http://fortawesome.github.io/Font-Awesome/">
                        Font Awesome
                      </List.Item>
                      <List.Item href="https://icomoon.io/">Ico Moon</List.Item>
                      <List.Item href="https://elements.envato.com/">
                        Envato Elements
                      </List.Item>
                    </List>
                  </Segment>
                  <p />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
} // This is where what you see ends and it all closes up.

export default Template;

// this is what all the code between the brackets becomes. a single output
// word.i HIGHLY suggest you pick a different word, because as soon as you
// start fleshing out your app, you may want to use the word template somwhere
// else, and having it at such a root level is not smart.

// if you want to keep a backup reminder setup during development,
// i would change all instances of the word "Template" inside the "src" folder
// to an entirely silly made up combinationof words, like
// "horseridingthecowboy", just to make a search that much easier, you look up
// "horseridingthecowboy" and voila, instant links in your search explorer to
// all the places you need to go to add a new page.

// So, in conclusion, that should be your first order of business.
// Renaming "template" to some other word combination you"ll never use
// anywhere else as a variable or even in text.
// For myself, it"s as my example said.

// a horse riding a cowboy. in this case, you"re the cowboy.
// this boilerplate is the horse. much larger and far more powerful.

// Good Luck. - KG the noob.
