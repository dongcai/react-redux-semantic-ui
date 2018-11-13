import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {
  List,
  Segment,
  Container,
  Divider,
  Message,
  Header,
  Icon,
} from 'semantic-ui-react';

// You can delete everything you want pretty much and start fresh. delete all the comments for sure.

// if you are an advanced coder. don't bother reading. These comments are for newer users like myself.
// ... if you're new, these instructions are helpful, but not gospel, simply what worked for me.

// The last import lines above way up there ^^ is where styles come from.
// This boilerplate uses the semantic-ui-react template system.
// you can find everything you need about that here: https://react.semantic-ui.com/

// "Template" in context of the next line of code, will be swapped for whatever you want
// if you're making a picture page, maybe you'll change it to "pictures".
// just rember at the end of the page, the ~export~ has to match the word you use here.
// that way when you pull "template" or whatever you change this into, export defines what is called.
// and what is exported is everything in betwen the class mustaches "{... }"

// This next comment just tells ESLINT (get ESLINT!) to calm down about making this page stateful.
// This page is just a bunch of stateless material, so, ESLINT can shush about wanting a pure component.

// eslint-disable-next-line react/prefer-stateless-function
class Template extends Component {
  render () {
    return (
      <div className="container">
        <Helmet title="Template" />
        <Segment>
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
            inside the "src" folder for the word "template" and you'll find all
            the references to this page. However, For the Quick visual, Below
            are the files you will need to modify, and the folders they are in.
            My suggested route is to do the following:
          </Message>
          <Divider />
          <Message floating compact size="mini">
            if you're using VScode, or any kind of halway customized IDE,
            choose "Typescript React" as a language. The colour coding and
            automatic foratting with "Prettier" and "Beautify" and "ESLINT"
            work well with this kit.
          </Message>
          <Container>
            <Divider />
            <List>
              <List.Item>
                <List.Icon color="orange" name="folder open" />
                <List.Content>
                  <List.Header>src</List.Header>
                  <List.Description>Source files for project</List.Description>
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
                                      You'll find template has been added to the
                                      main app here.
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
                                    <List.Header>Template.js</List.Header>
                                    <List.Description>
                                      You'll find template has been added to the
                                      main app here.
                                    </List.Description>
                                  </List.Content>
                                </List.Item>
                                <List.Item>
                                  <List.Icon color="blue" name="file" />
                                  <List.Content>
                                    <List.Header>Loadable.js</List.Header>
                                    <List.Description>
                                      Goes hand in hand with each of the Pages
                                    </List.Description>
                                  </List.Content>
                                </List.Item>
                              </List.List>
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
                    App's Main Config file
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
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Template;
