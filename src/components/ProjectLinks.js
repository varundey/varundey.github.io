import React from 'react';
import styled from 'styled-components';

const StyledProjectLinksList = styled.ul`
  list-style: none;
  font-size: 1.8rem;
`;

const StyledProjectLink = styled.li`
  display: inline;
`;

class ProjectLinks extends React.Component {
  render() {
    if (!!this.props.link || !!this.props.repo) {
      return (
        <StyledProjectLinksList>
          {this.props.link && (
            <StyledProjectLink>
              <a href={this.props.link} target="_blank">
                Link
              </a>
              {this.props.repo && <span> | </span>}
            </StyledProjectLink>
          )}

          {this.props.repo && (
            <StyledProjectLink>
              <a href={this.props.repo} target="_blank">
                Repo
              </a>
            </StyledProjectLink>
          )}
        </StyledProjectLinksList>
      );
    } else {
      return null;
    }
  }
}

export default ProjectLinks;