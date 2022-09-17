import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Content() {
  return (
    <Box sx={{ textAlign: "left"}} className="box1">
      <Grid container sx={{justifyContent:"space-between"}} >
        <Grid item xs={8}>
          <Typography variant="h6" gutterBottom component="div">
            From the Firehouse
          </Typography>
          <hr />
          <Typography variant="h4" gutterBottom component="div">
            Sample Blog Post
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            April 1, 2020 by <Link href="#">Oiliver</Link>
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            This blog showa a few different types of content that are supported
            and styled with Material styles. Basic typography, images, and code
            are all supported. You can extend these by modifying Markdown.js.
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            Cum socils natoque penatibus et magnis dis parturient montes,
            nascetur ridiculusmus. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Sed posuere consectetur est at
            laboritis. Cras mattis consectetur purus sit amet fermentum.
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            Curabitur blandit tempus porttitor porttitor. Nullam quis risus eget
            urna mollis ornare vel eu leo. Nullam id dolor Aenean lacinia
            bibendum nulla sed consectetur.
          </Typography>
          <Typography variant="h5" gutterBottom component="div">
            Heading
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor Duis mollis, est non commodo luctus, nisi erat porttitor
            ligul, eget lacinia odio sem nec elit Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <br />
          <Typography variant="subtitle2" gutterBottom component="div">
            Sub-heading 1
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            Cum socils natoque penatibus et magnis dis parturient montes,
            nascetur ridiculusmus.
          </Typography>
          <br />
          <Typography variant="subtitle2" gutterBottom component="div">
            Sub-heading 2
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            Cum socils natoque penatibus et magnis dis parturient montes,
            nascetur ridiculusmus. Aenean lacinia bibendum nulla sed
            consectetur. Eitam porta sem malesuada magna mollis eulsmod Fouce
            dapibus, tellus ac curtsus commodo. tortor mautis condimmtum nibh,
            ut fermentummassa justo sit amet risus.
          </Typography>
          <br />
          <br />
          <Typography variant="h4" gutterBottom component="div">
            New feature
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            March 14, 2020 by <Link href="#">Tom</Link>
          </Typography>
          <br />
          <Typography variant="subtitle2" gutterBottom component="div">
            Cum socils natoque penatibus et magnis dis parturient montes,
            nascetur ridiculusmus. Aenean lacinia bibendum nulla sed
            consectetur. Eitam porta sem malesuada magna mollis eulsmod Fouce
            dapibus, tellus ac curtsus commodo. tortor mautis condimmtum nibh,
            ut fermentummassa justo sit amet risus.
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            <List>
              <ListItem disablePadding>
                <ListItemText primary="Praesnt commodo cursus magna,vel scelerisque nisl consectetur et" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Donec id elit non mi porta gravida ata eget metus." />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Nulla vitae elit libero, a pharetra augue" />
              </ListItem>
            </List>
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            Eitam porta sem malesuada magna mollis eulsmod. Cras mattis
            consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
            sed consectetur.
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
            libero, a pharetra augue.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              width: 300,
              height: 150,
              backgroundColor: "lightgray",
              p: 3
            }}
          >
            <Typography variant="h5" gutterBottom component="div">
              About
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              Eitam porta sem malesuada magna mollis eulsmod. Cras mattis
              consectetur purus sit amet fermentum. Aenean lacinia bibendum
              nulla sed consectetur.
            </Typography>
          </Box>
          <br />
          <Typography variant="h5" gutterBottom component="div">
            Achives
          </Typography>
          <Link href="#">March2020</Link> <br />
          <Link href="#">February2020</Link>
          <br />
          <Link href="#">January2020</Link>
          <br />
          <Link href="#">November2020</Link>
          <br />
          <Link href="#">October2020</Link>
          <br />
          <Link href="#">September2020</Link>
          <br />
          <Link href="#">August2020</Link>
          <br />
          <Link href="#">July2020</Link>
          <br />
          <Link href="#">June2020</Link>
          <br />
          <Link href="#">May2020</Link>
          <br />
          <Link href="#">April2020</Link>
          <br />
          <br />
          <Typography variant="h5" gutterBottom component="div">
            Social
          </Typography>
          <Box>
            <GitHubIcon color="primary" />
            <Link href="#">GitHub</Link>
            <br />
            <TwitterIcon color="primary" />
            <Link href="#">Twitter</Link>
            <br />
            <FacebookIcon color="primary" />
            <Link href="#">Facebook</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
